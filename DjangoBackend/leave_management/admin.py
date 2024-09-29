from django.contrib import admin
from .models import EmployeeDepartments,ManagerDepartments, Employee,Manager,ManagerAttendance,EmployeeAttendance,LeaveBalance,Leaves,Offdays,Approvals,Notifications

admin.site.register(EmployeeDepartments)

admin.site.register(ManagerDepartments)

admin.site.register(Employee)

admin.site.register(ManagerAttendance)

admin.site.register(Manager)

admin.site.register(LeaveBalance)

admin.site.register(Leaves)

admin.site.register(EmployeeAttendance)

admin.site.register(Offdays)

admin.site.register(Approvals)

admin.site.register(Notifications)