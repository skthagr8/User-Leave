from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField,DateField
from wtforms.validators import DataRequired, Email,DataRequired

class EmployeeForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired()])
    email = StringField('Email', validators=[DataRequired(), Email()])
    position = StringField('Position', validators=[DataRequired()])
    age = IntegerField('Age', validators=[DataRequired()])
    gender = StringField('',validators=[DataRequired()])
    phone_no = StringField('Phone Number',validators=[DataRequired()])
    leave_balance = IntegerField('Initial Leave Balance', validators=[DataRequired()])
    submit = SubmitField('Add Employee')

class UpdateEmployeeForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired()])
    email = StringField('Email', validators=[DataRequired(), Email()])
    position = StringField('Position', validators=[DataRequired()])
    leave_balance = IntegerField('Leave Balance', validators=[DataRequired()])
    phone_no = StringField('Phone Number',validators=[DataRequired()])
    position = StringField('Position', validators=[DataRequired()])
    submit = SubmitField('Update Employee')

class DeleteEmployeeForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired()])
    email = StringField('Email', validators=[DataRequired(), Email()])
    position = StringField('Position', validators=[DataRequired()])
    leave_balance = IntegerField('Leave Balance', validators=[DataRequired()])
    phone_no = StringField('Phone Number',validators=[DataRequired()])
    position = StringField('Position', validators=[DataRequired()])
    submit = SubmitField('Update Employee')

class HR_ManagerForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired()])
    email = StringField('Email', validators=[DataRequired(), Email()])
    position = StringField('Position', validators=[DataRequired()])
    age = IntegerField('Age', validators=[DataRequired()])
    dob =  DateField('Date of Birth',validators=[DataRequired()])
    registration_date = DateField('Registration Date',validators=[DataRequired()])
    gender = StringField('Gender',validators=[DataRequired()])
    phone_no = StringField('Phone Number',validators=[DataRequired()])
    submit = SubmitField('Add HR Manager')

class UpdateHR_ManagerForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired()])
    email = StringField('Email', validators=[DataRequired(), Email()])
    phone_no = StringField('Phone Number',validators=[DataRequired()])
    submit = SubmitField('Update Employee')

class DeleteHR_ManagerForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired()])
    email = StringField('Email', validators=[DataRequired(), Email()])
    phone_no = StringField('Phone Number',validators=[DataRequired()])
    submit = SubmitField('Update Employee')


