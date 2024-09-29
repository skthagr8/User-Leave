from django.urls import path
from .views import EmployeeLoginView, EmployeeRegistrationView

urlpatterns = [
    path('login/', EmployeeLoginView.as_view(), name='employee_login'),
    path('register/', EmployeeRegistrationView.as_view(), name='employee_register'),
]
