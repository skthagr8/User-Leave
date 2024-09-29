import React from 'react';

const ManagerHome = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Manager Dashboard</h1>

      {/* Leave Approvals */}
      <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Pending Approvals</h2>
          <ul>
            {['John Doe', 'Jane Smith'].map((employee) => (
              <li key={employee} className="text-gray-700">
                {employee} - Maternity Leave
              </li>
            ))}
          </ul>
          <a href="/pending-approvals" className="text-blue-500 mt-2 block">View All Approvals</a>
        </div>
      </div>
    </div>
  );
};

export default ManagerHome;
