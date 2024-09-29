from django.db import models

class Manager(models.Model):
    id = models.AutoField(primary_key=True) 
    first_name = models.CharField(max_length=256, null=False)
    last_name = models.CharField(max_length=256, null=False)
    email = models.EmailField(max_length=300, null=False)
    phone_no = models.CharField(max_length=15, null=True)
    gender = models.CharField(max_length=10, null=False)
    age = models.IntegerField(null=False)
    dob = models.DateField()
    registration_date = models.DateField(auto_now_add=True)  # Automatically set the date when the manager is created
    role = models.CharField(max_length=30, null=True)

      # Self-referencing relationship
    supervisor = models.ForeignKey('self', on_delete=models.SET_NULL, null=True, blank=True, related_name='subordinates')
    

    def __str__(self):
        return f"{self.first_name} {self.last_name}"


class EmployeeDepartments(models.Model):
    id = models.AutoField(primary_key=True) 
    name = models.CharField(max_length=256)
    hod = models.OneToOneField('Manager',on_delete=models.SET_NULL,null=True)

    # A department can have a manager, but it's optional (can be null)
    def __str__(self):
        return self.name

class ManagerDepartments(models.Model):
    id = models.AutoField(primary_key=True) 
    name = models.CharField(max_length=256)
    hod = models.OneToOneField('Manager',on_delete=models.SET_NULL,null=True)

    # A department can have a manager, but it's optional (can be null)
    def __str__(self):
        return self.name

class Offdays(models.Model):
    id = models.AutoField(primary_key=True) 
    type = models.CharField(max_length=30, null=True)
    date = models.DateField()
    days_spanning = models.IntegerField(default=0)

    def __str__(self):
        return f"{self.type} on {self.date}"

class Notifications(models.Model):
    id = models.AutoField(primary_key=True) 
    user = models.ForeignKey('Employee', on_delete=models.CASCADE)
    message = models.CharField(max_length=256)
    created_at = models.DateTimeField(auto_now_add=True)  # Automatically set the date/time when the notification is created

    def __str__(self):
        return f"Notification for {self.user}: {self.message}"

class Employee(models.Model):
    id = models.AutoField(primary_key=True)  
    first_name = models.CharField(max_length=256, null=False)
    last_name = models.CharField(max_length=256, null=False)
    email = models.EmailField(max_length=300, null=False, unique=True) 
    phone_no = models.CharField(max_length=15, null=True, blank=True)
    gender = models.CharField(max_length=10, null=False)
    age = models.IntegerField(null=False)
    dob = models.DateField()
    department = models.ForeignKey('EmployeeDepartments', on_delete=models.CASCADE,null=True)
    registration_date = models.DateField(auto_now_add=True)  # Automatically set the date when the employee is created

    def __str__(self):
        return f"{self.first_name} {self.last_name}"


class LeaveBalance(models.Model):
    id = models.AutoField(primary_key=True) 
    user = models.OneToOneField(Employee, on_delete=models.CASCADE,null=True)
    leave_type = models.CharField(max_length=30, null=False)
    used_leaves = models.IntegerField(default=0)
    total_leaves = models.IntegerField(default=40)
    leave_balance = models.IntegerField(default=40)  # Should be updated based on used_leaves

    def __str__(self):
        return f"{self.user}'s Leave Balance"

class Leaves(models.Model):
    id = models.AutoField(primary_key=True) 
    user = models.ForeignKey(Employee, on_delete=models.CASCADE)
    leave_type = models.CharField(max_length=30, null=False)
    reason = models.CharField(max_length=100, null=False)  # Increased length for better explanation
    manager = models.ForeignKey(Manager, on_delete=models.CASCADE)
    status = models.CharField(max_length=20, null=False)
    start_date = models.DateField()
    end_date = models.DateField()
    applied_on = models.DateField(auto_now_add=True)  # Automatically set when the leave is applied
    updated_on = models.DateField(auto_now=True)  # Automatically update the date when the leave is modified

class EmployeeAttendance(models.Model):
    id = models.AutoField(primary_key=True) 
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE)
    date = models.DateField()
    status = models.CharField(max_length=40, null=False)

    def __str__(self):
        return f"{self.employee} Attendance on {self.date}"

class ManagerAttendance(models.Model):
    id = models.AutoField(primary_key=True) 
    manager = models.ForeignKey(Manager, on_delete=models.CASCADE)
    date = models.DateField()
    status = models.CharField(max_length=40, null=False)

    def __str__(self):
        return f"{self.manager} Attendance on {self.date}"

class Approvals(models.Model):
    id = models.AutoField(primary_key=True) 
    leave = models.ForeignKey(Leaves, on_delete=models.CASCADE)
    approved_by = models.ForeignKey(Manager, on_delete=models.CASCADE)
    approval_status = models.CharField(max_length=30, null=False)
    comments = models.TextField(null=True, blank=True)  # Comments can be optional

    def __str__(self):
        return f"Approval for {self.leave} by {self.approved_by}"
