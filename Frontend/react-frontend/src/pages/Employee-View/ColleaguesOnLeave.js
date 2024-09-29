import React from 'react';

const ColleaguesOnLeave = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Colleagues on Leave</h1>

      <ul className="mt-6 space-y-4">
        {['John Doe', 'Jane Smith', 'Alex Johnson'].map((colleague) => (
          <li key={colleague} className="bg-white p-4 rounded shadow-md">
            {colleague}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ColleaguesOnLeave;
