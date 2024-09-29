import React from 'react';
import { FiSettings, FiUpload, FiMail } from 'react-icons/fi';

const SettingsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <FiSettings className="mr-2" /> Settings
        </h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Profile Picture</label>
            <div className="flex items-center">
              <input type="file" className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm" />
              <FiUpload className="ml-2 text-gray-500" />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <div className="flex items-center border rounded-lg p-2 bg-gray-100">
              <FiMail className="mr-2 text-gray-500" />
              <input type="email" placeholder="Enter your email" className="bg-transparent outline-none w-full" />
            </div>
          </div>
          <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default SettingsPage;
