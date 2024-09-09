import React, { useState } from 'react';

const LeaveApplicationForm = () => {
  const [formData, setFormData] = useState({
    leaveType: '',
    startDate: '',
    endDate: '',
    reason: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data to backend
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-3xl font-semibold mb-6 text-center">Apply for Leave</h1>
        
        <label className="block mb-2">Leave Type</label>
        <select
          name="leaveType"
          value={formData.leaveType}
          onChange={handleInputChange}
          className="mb-4 p-2 w-full border rounded-lg"
        >
          <option value="">Select Leave Type</option>
          <option value="medical">Medical Leave</option>
          <option value="maternity">Maternity Leave</option>
          <option value="marriage">Marriage Leave</option>
        </select>

        <label className="block mb-2">Start Date</label>
        <input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleInputChange}
          className="mb-4 p-2 w-full border rounded-lg"
        />

        <label className="block mb-2">End Date</label>
        <input
          type="date"
          name="endDate"
          value={formData.endDate}
          onChange={handleInputChange}
          className="mb-4 p-2 w-full border rounded-lg"
        />

        <label className="block mb-2">Reason</label>
        <textarea
          name="reason"
          value={formData.reason}
          onChange={handleInputChange}
          className="mb-4 p-2 w-full border rounded-lg"
        ></textarea>

        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-lg w-full">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LeaveApplicationForm;
