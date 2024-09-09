import React from 'react';

const AllEmployeesLeaveHistory = () => {
  // Sample data for leave history
  const leaveHistory = [
    { name: 'Alice Johnson', leaveType: 'Medical', startDate: '2024-09-10', endDate: '2024-09-15', status: 'Approved' },
    { name: 'Bob Smith', leaveType: 'Marriage', startDate: '2024-09-20', endDate: '2024-09-25', status: 'Pending' }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Employee Leave History</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Leave Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">End Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {leaveHistory.map((record, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{record.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{record.leaveType}</td>
                <td className="px-6 py-4 whitespace-nowrap">{record.startDate}</td>
                <td className="px-6 py-4 whitespace-nowrap">{record.endDate}</td>
                <td className="px-6 py-4 whitespace-nowrap">{record.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllEmployeesLeaveHistory;
