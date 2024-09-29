import React from 'react';

const EmployeeLeaveHistory = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Leave History</h1>

      <table className="table-auto w-full mt-6">
        <thead>
          <tr>
            <th className="px-4 py-2">Leave Type</th>
            <th className="px-4 py-2">Start Date</th>
            <th className="px-4 py-2">End Date</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {['Maternity', 'Sickness'].map((leaveType, index) => (
            <tr key={index} className="bg-white border-b">
              <td className="px-4 py-2">{leaveType}</td>
              <td className="px-4 py-2">2023-01-01</td>
              <td className="px-4 py-2">2023-02-01</td>
              <td className="px-4 py-2 text-green-500">Approved</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeLeaveHistory;
