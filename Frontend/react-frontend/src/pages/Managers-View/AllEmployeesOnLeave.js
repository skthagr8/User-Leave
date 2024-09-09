import React from 'react';

const AllEmployeesOnLeave = () => {
  // Sample data for employees on leave
  const employeesOnLeave = [
    { name: 'Alice Johnson', leaveType: 'Medical', startDate: '2024-09-10', endDate: '2024-09-15' },
    { name: 'Bob Smith', leaveType: 'Marriage', startDate: '2024-09-20', endDate: '2024-09-25' }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Employees on Leave</h2>
        <ul>
          {employeesOnLeave.map((employee, index) => (
            <li key={index} className="mb-4 p-4 border rounded-lg shadow-sm">
              <p><strong>Name:</strong> {employee.name}</p>
              <p><strong>Leave Type:</strong> {employee.leaveType}</p>
              <p><strong>Start Date:</strong> {employee.startDate}</p>
              <p><strong>End Date:</strong> {employee.endDate}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AllEmployeesOnLeave;
