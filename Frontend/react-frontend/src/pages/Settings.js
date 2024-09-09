import React from 'react';

const SettingsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Settings</h2>
        {/* Settings options go here */}
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Profile Picture</label>
            <input type="file" className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm" />
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
