import React from 'react';
import { FaCalendarAlt, FaHistory } from 'react-icons/fa'; // Import icons


const EmployeeHome = () => {
  return (

    <div className="flex-grow p-8 border border-gray-300 shadow-xl bg-white rounded-lg">
      <h1 className="text-3xl font-DM_Sans font-bold mb-6">Employee Dashboard</h1>

      {/* Leave Balances */}
      <div className="my-8 grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {['Maternity', 'Sickness', 'Marriage','Casual','Vacation','Personal'].map((leaveType) => (
          <div key={leaveType} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-xl font-DM_Sans font-semibold mb-2">{leaveType} Leave</h2>
            <p className="text-gray-800 font-DM_Sans">Days Remaining: 10</p>
          </div>
        ))}
      </div>

{/* Colleagues on Leave */}
    <div className="bg-white p-6 rounded-lg shadow-xl my-6 border border-gray-200">
     <h2 className="text-xl font-semibold mb-2 font-DM_Sans">Colleagues on Leave</h2>
  <ul className="list-disc list-inside">
    {[
      { name: 'John Doe', imgSrc: 'path/to/john-doe.jpg' },
      { name: 'Jane Smith', imgSrc: 'path/to/jane-smith.jpg' },
      { name: 'Alex Johnson', imgSrc: 'path/to/alex-johnson.jpg' }
    ].map((colleague) => (
      <li key={colleague.name} className="flex items-center text-gray-800 font-DM_Sans mb-2">
        <img
          src={colleague.imgSrc}
          alt={colleague.name}
          className="w-10 h-10 rounded-full mr-3"
        />
        {colleague.name}
      </li>
    ))}
  </ul>
  <a href="/ColleaguesOnLeave" className="text-blue-500 mt-2 block hover:underline font-DM_Sans">
    Show More
  </a>
</div>

      {/* Links */}


    <div className="flex space-x-4 mt-6">
      <a
        href="/leave-application"
        className="bg-white border border-blue-500 text-blue-500 py-2 px-4 rounded flex items-center space-x-2 hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 font-DM_Sans"
      >
        <FaCalendarAlt className="text-lg" />
        <span>Apply for Leave</span>
      </a>
      <a
        href="/employee-leave-history"
        className="bg-blue-500 text-white py-2 px-4 rounded flex items-center space-x-2 font-DM_Sans"
      >
        <FaHistory className="text-lg" />
        <span>Leave History</span>
      </a>
    </div>
    </div>

  );
};

export default EmployeeHome;
