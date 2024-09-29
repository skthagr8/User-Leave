from rest_framework import serializers
from .models import EmployeeDepartments, Offdays, Approvals, Notifications, EmployeeAttendance, ManagerAttendance, Manager, Employee, LeaveBalance, Leaves

class EmployeeDepartmentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmployeeDepartments
        fields = ['id', 'name', 'manager_id']

class OffdaysSerializer(serializers.ModelSerializer):
    class Meta:
        model = Offdays
        fields = ['id', 'type', 'date', 'days_spanning']

class ApprovalsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Approvals
        fields = ['id', 'leave_id', 'approved_by', 'approval_status', 'comments']

class NotificationsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notifications
        fields = ['id', 'user_id', 'message', 'created_at']

class EmployeeAttendanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmployeeAttendance
        fields = ['id', 'user_id']

class ManagerAttendanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = ManagerAttendance
        fields = ['id', 'manager_id', 'date', 'status']

class ManagerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Manager
        fields = ['id', 'first_name','last_name', 'email', 'phone_no', 'gender', 'age', 'dob', 'registration_date', 'leave_balance', 'role']

class EmployeeSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = Employee
        fields = [
            'id', 'first_name', 'last_name', 'email', 'phone_no', 'gender', 
            'age', 'dob', 'registration_date', 'password', 'department', 'leave_balance'
        ]

    def create(self, validated_data):
        password = validated_data.pop('password')
    
        # Create the Employee instance
        employee = Employee(**validated_data)
        employee.set_password(password)  # Set the hashed password
        
        # Save the employee again to update department and leave balance
        employee.save()
        
        return employee

class EmployeeLoginSerializer(serializers.Serializer):
    username = serializers.CharField(required=True)
    password = serializers.CharField(required=True, write_only=True)  # Password is write-only for security
    
    # No need for 'create' method since this is for login (authentication)

class LeaveBalanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = LeaveBalance
        fields = ['id', 'user_id', 'leave_type', 'used_leaves', 'total_leaves', 'leave_balance']

class LeavesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Leaves
        fields = ['id', 'user_id', 'leave_type', 'reason', 'manager_id', 'status', 'start_date', 'end_date', 'applied_on', 'updated_on']
