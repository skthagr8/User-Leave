import React from 'react';
import { FaCheckCircle } from 'react-icons/fa'; 

const LeaveStatus = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
       
        <FaCheckCircle className="text-green-500 text-6xl mb-4 mx-auto" />
        
        <h1 className="text-3xl font-semibold mb-4">Leave Application Submitted</h1>
        
        <p className="text-lg mb-6">Your leave application has been submitted successfully.</p>
        
        <a 
          href="/employee-home" 
          className="inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default LeaveStatus;
