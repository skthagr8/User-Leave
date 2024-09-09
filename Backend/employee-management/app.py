from flask import Flask, render_template, redirect, url_for, request, flash,Blueprint
from db import db
from models import Employee
from forms import EmployeeForm, UpdateEmployeeForm, HR_ManagerForm, DeleteEmployeeForm, DeleteHR_ManagerForm
from keys import secret_key

app = Flask(__name__)
app.config['SECRET_KEY'] = secret_key
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite3'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

employee_bp = Blueprint('User-Leave',__name__,template_folder='./templates')
hr_bp = Blueprint('User-Leave', __name__,template_folder='./templates')

@app.route('/')
def index():
    return render_template('list_employees.html', employees=Employee.query.all())

@employee_bp.route('add_employee.html', methods=['GET', 'POST'])
def add_employee():

    db.session.commit()


@employee_bp.route('update_employee.html', methods=['GET', 'POST'])
def update_employee(id):
    employee = Employee.query.get_or_404(id)
    form = UpdateEmployeeForm(obj=employee)
    if form.validate_on_submit():
        employee.name = form.name.data
        employee.email = form.email.data
        employee.position = form.position.data
        employee.phone_no = form.phone_no.data
        employee.leave_balance = form.leave_balance.data
        db.session.commit()
        flash('Employee updated successfully!', 'success')
        return redirect(url_for('index'))
    return render_template('update_employee.html', form=form)

@employee_bp.route('/index', methods=['POST'])
def delete_employee(id):
    delete_employee = DeleteEmployeeForm(obj=employee)
    employee = delete_employee.query.get_or_404(id)
    db.session.delete(employee)
    db.session.commit()
    flash('Employee deleted successfully!', 'danger')
    return redirect(url_for('index'))

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True, host='127.0.0.1', port=5500)

