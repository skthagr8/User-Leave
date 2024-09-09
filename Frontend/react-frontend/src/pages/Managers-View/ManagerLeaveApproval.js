import React from 'react';

const ManagerLeaveApproval = () => {
  const leaveRequests = [
    { id: 1, employee: 'John Doe', type: 'Medical Leave', startDate: '2024-09-10', endDate: '2024-09-14' },
    { id: 2, employee: 'Jane Smith', type: 'Maternity Leave', startDate: '2024-09-01', endDate: '2024-12-01' }
  ];

  const handleApprove = (id) => {
    // Approve logic
  };

  const handleReject = (id) => {
    // Reject logic
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Manager's Leave Approval</h1>

      {leaveRequests.map((request) => (
        <div key={request.id} className="bg-white p-4 mb-4 rounded-lg shadow-lg">
          <p className="text-xl font-semibold mb-2">{request.employee}</p>
          <p>Leave Type: {request.type}</p>
          <p>From: {request.startDate} To: {request.endDate}</p>

          <div className="mt-4">
            <button
              onClick={() => handleApprove(request.id)}
              className="bg-green-600 text-white py-2 px-4 rounded-lg mr-2"
            >
              Approve
            </button>
            <button
              onClick={() => handleReject(request.id)}
              className="bg-red-600 text-white py-2 px-4 rounded-lg"
            >
              Reject
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManagerLeaveApproval;
