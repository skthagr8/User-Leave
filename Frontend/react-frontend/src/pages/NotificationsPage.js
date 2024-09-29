import React from 'react';
import { FiBell, FiCalendar } from 'react-icons/fi';

const NotificationsPage = () => {

  const notifications = [
    { id: 1, message: 'Leave request approved for Alice Johnson', date: '2024-09-05' },
    { id: 2, message: 'New leave request from Bob Smith', date: '2024-09-06' }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <FiBell className="mr-2" /> Notifications
        </h2>
        <ul>
          {notifications.map((notification) => (
            <li key={notification.id} className="mb-4 p-4 border rounded-lg shadow-sm flex justify-between items-center">
              <div>
                <p className="flex items-center"><FiBell className="mr-2" />{notification.message}</p>
              </div>
              <p className="text-gray-500 text-sm flex items-center">
                <FiCalendar className="mr-1" /> {notification.date}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NotificationsPage;
