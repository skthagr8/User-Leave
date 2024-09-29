import React from 'react';
import { FiUser, FiLock } from 'react-icons/fi';

function Login() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <div className="flex items-center border rounded-lg p-2 bg-gray-100">
              <FiUser className="text-gray-500 mr-2" />
              <input type="text" placeholder="Enter your username" className="bg-transparent outline-none w-full" />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <div className="flex items-center border rounded-lg p-2 bg-gray-100">
              <FiLock className="text-gray-500 mr-2" />
              <input type="password" placeholder="Enter your password" className="bg-transparent outline-none w-full" />
            </div>
          </div>
          <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-lg w-full hover:bg-blue-700">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
