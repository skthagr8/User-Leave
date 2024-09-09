import React from 'react';

const EmployeeHome = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Employee Leave Dashboard</h1>
      
      {/* Leave Balances Table */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">Leave Balances</h2>
        <table className="w-full text-left table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4">Leave Type</th>
              <th className="py-2 px-4">Balance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4">Medical Leave</td>
              <td className="py-2 px-4">5</td>
            </tr>
            <tr>
              <td className="py-2 px-4">Marriage Leave</td>
              <td className="py-2 px-4">3</td>
            </tr>
            <tr>
              <td className="py-2 px-4">Maternity Leave</td>
              <td className="py-2 px-4">10</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      {/* Link to Leave History */}
      <div className="mb-8">
        <a href="/employee-leave-history" className="text-blue-600 underline">View Your Leave History</a>
      </div>
      
      {/* Colleagues on Leave */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Colleagues on Leave</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg shadow text-center">
            <p className="text-lg font-semibold">John Doe</p>
            <p>Medical Leave</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow text-center">
            <p className="text-lg font-semibold">Jane Smith</p>
            <p>Maternity Leave</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeHome;
