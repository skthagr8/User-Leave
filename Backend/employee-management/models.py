from sqlalchemy.orm import Mapped, mapped_column
from db import db
from sqlalchemy import Date,Integer,String

class Employee(db.Model):
    id: Mapped[int] = mapped_column(Integer,primary_key=True)
    name: Mapped[str] = mapped_column(String(50),unique=True,nullable=False)
    email: Mapped[str] = mapped_column(String(100),unique=True,nullable=True)
    phone_no: Mapped[str] = mapped_column(String(15),unique=True,nullable=True)
    gender: Mapped[str] = mapped_column(String(30),unique=False,nullable=True)
    dob: Mapped[Date] = mapped_column(Date,unique=False,nullable=False)
    position : Mapped[str] = mapped_column(String(50),nique=False,nullable=False)
    age : Mapped[int] = mapped_column(Integer,unique=False,nullable=False)
    registration_date : Mapped[Date] = mapped_column(Date,unique=False,nullable=False)
    leave_balance: Mapped[int] = mapped_column(Integer,unique=False,default=0,nullable=False)
    
    def __repr__(self):
        return f'<Employee {self.name}>'

class HR_Manager(db.Model):
    id: Mapped[int] = mapped_column(Integer,primary_key=True)
    name: Mapped[str] = mapped_column(String(50),unique=True,nullable=False)
    email: Mapped[str] = mapped_column(String(100),unique=True,nullable=True)
    phone_no: Mapped[str] = mapped_column(String(15),unique=True,nullable=True)
    gender: Mapped[str] = mapped_column(String(30),unique=False,nullable=True)
    dob: Mapped[Date] = mapped_column(Date,unique=False,nullable=False)
    age : Mapped[int] = mapped_column(Integer,unique=False,nullable=False)
    registration_date : Mapped[Date] = mapped_column(Date,unique=False,nullable=False)
    
    def __repr__(self):
        return f'<HR Manager {self.name}>'


    