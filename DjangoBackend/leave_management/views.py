from django.contrib.auth import authenticate
from django.conf import settings
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from django.http import HttpResponse,JsonResponse
from rest_framework import status 
from django.middleware import csrf
from django.views.decorators.csrf import csrf_exempt,csrf_protect
from rest_framework import exceptions as rest_exceptions, response, decorators as rest_decorators, permissions as rest_permissions
from rest_framework_simplejwt import tokens, views  as jwt_serializers, exceptions as jwt_exceptions
from rest_framework import viewsets
from .models import Offdays, Approvals,EmployeeDepartments, Notifications, EmployeeAttendance, ManagerAttendance, Manager, Employee, LeaveBalance, Leaves
from .serializers import EmployeeDepartmentsSerializer, OffdaysSerializer, ApprovalsSerializer, NotificationsSerializer, EmployeeAttendanceSerializer, ManagerAttendanceSerializer, ManagerSerializer, EmployeeSerializer, LeaveBalanceSerializer, LeavesSerializer
from django.http import JsonResponse
from django.middleware.csrf import get_token
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny
from django.contrib.auth.models import User
from rest_framework.authentication import SessionAuthentication
from .serializers import EmployeeSerializer



def csrf_token_view(request):
    csrf_token = get_token(request)
    return JsonResponse({'csrfToken': csrf_token})


class EmployeeDepartmentsViewSet(viewsets.ModelViewSet):
    queryset = EmployeeDepartments.objects.all()
    serializer_class = EmployeeDepartmentsSerializer

class OffdaysViewSet(viewsets.ModelViewSet):
    queryset = Offdays.objects.all()
    serializer_class = OffdaysSerializer

class ApprovalsViewSet(viewsets.ModelViewSet):
    queryset = Approvals.objects.all()
    serializer_class = ApprovalsSerializer

class NotificationsViewSet(viewsets.ModelViewSet):
    queryset = Notifications.objects.all()
    serializer_class = NotificationsSerializer

class EmployeeAttendanceViewSet(viewsets.ModelViewSet):
    queryset = EmployeeAttendance.objects.all()
    serializer_class = EmployeeAttendanceSerializer

class ManagerAttendanceViewSet(viewsets.ModelViewSet):
    queryset = ManagerAttendance.objects.all()
    serializer_class = ManagerAttendanceSerializer

class ManagerViewSet(viewsets.ModelViewSet):
  
    serializer_class = ManagerSerializer

class EmployeeViewSet(viewsets.ModelViewSet):
    serializer_class = EmployeeSerializer

class LeaveBalanceViewSet(viewsets.ModelViewSet):

    serializer_class = LeaveBalanceSerializer

class LeavesViewSet(viewsets.ModelViewSet):
  
    serializer_class = LeavesSerializer

    @csrf_protect
    def create(self, request, *args, **kwargs):
        """
        Create a new leave application.
        """
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        
        # Return DRF's Response object with created data
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def retrieve(self, request, *args, **kwargs):
        """
        Retrieve a leave application by ID.
        """
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)

    def update(self, request, *args, **kwargs):
        """
        Update a leave application by ID.
        """
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        if getattr(instance, '_prefetched_objects_cache', None):
            instance._prefetched_objects_cache = {}
        return Response(serializer.data)

    def destroy(self, request, *args, **kwargs):
        """
        Delete a leave application by ID.
        """
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT) 

class EmployeeRegistrationView(APIView):
    permission_classes = [AllowAny]
    authentication_classes = []  # No authentication required for registration

    def post(self, request):
        serializer = EmployeeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()  # Save the employee data and automatically create leave balance
            return Response({"message": "Employee registered successfully!"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

from .models import LeaveBalance, Employee
from .models import EmployeeDepartments,ManagerDepartments, Employee, Manager
from django.contrib.auth import authenticate, login
from .serializers import EmployeeLoginSerializer

class EmployeeLoginView(APIView):

    # Allow any user to attempt to log in
    permission_classes = [AllowAny]
    authentication_classes = []  # Disable authentication for this view
    
    def post(self, request):
        # Serializer to validate login data
        serializer = EmployeeLoginSerializer(data=request.data)
        
        if serializer.is_valid():
            username = serializer.validated_data['username']
            password = serializer.validated_data['password']
            user = authenticate(request, username=username, password=password)
            
            if user is not None:
                login(request, user)  # Log the user in using Django's built-in login
                return Response({"message": "Logged in successfully!"}, status=status.HTTP_200_OK)
            else:
                return Response({"error": "Invalid username or password"}, status=status.HTTP_401_UNAUTHORIZED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


from django.test import TestCase
from .models import EmployeeDepartments, LeaveBalance, Employee

class EmployeeRegistrationTest(TestCase):
    def setUp(self):
        # Create test data for department and leave balance
        self.department = EmployeeDepartments.objects.create(name="HR")
        self.leave_balance = LeaveBalance.objects.create(balance=20)

    def test_employee_registration(self):
        data = {
            'first_name': 'John',
            'last_name': 'Doe',
            'email': 'john.doe@example.com',
            'phone_no': '1234567890',
            'gender': 'M',
            'age': 30,
            'dob': '1994-01-01',
            'password': 'securepassword',
            'department': self.department.id,  # Use the ID from created department
            'leave_balance': self.leave_balance.id  # Use the ID from created leave balance
        }
        response = self.client.post('/api/register/', data)
        self.assertEqual(response.status_code, 201)
        self.assertIn("Employee registered successfully!", response.data["message"])
