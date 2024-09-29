from django.contrib import admin
from django.urls import path
from leave_management.views import EmployeeLoginView, EmployeeRegistrationView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/login/', EmployeeLoginView.as_view(), name='login'),    # URL for login view
    path('api/register/', EmployeeRegistrationView.as_view(), name='register'),  # URL for register view
]
