import React from 'react';

const LeaveStatus = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-semibold mb-4">Leave Application Submitted</h1>
        <p className="text-lg mb-4">Your leave application has been submitted successfully.</p>
        <a href="/employee-home" className="text-blue-600 underline">Back to Home</a>
      </div>
    </div>
  );
};

export default LeaveStatus;
