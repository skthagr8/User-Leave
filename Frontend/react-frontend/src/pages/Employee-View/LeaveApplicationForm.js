import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axiosInstance from '../../services/axios'; 

const LeaveApplicationForm = () => {
  const [formData, setFormData] = useState({
    employee_name: '',
    leave_type: '',
    start_date: '',
    end_date: '',
    reason: '',
  });

  const navigate = useNavigate(); 

  // Handle form change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post('http://localhost:8000/leaves/', formData); // CSRF token is automatically added via axios interceptor
      setFormData({
        employee_name: '',
        leave_type: '',
        start_date: '',
        end_date: '',
        reason: '',
      });
      navigate('/LeaveStatus'); // Redirect on successful submission
    } catch (error) {
      console.error('There was an error submitting the form!', error);
    }
  };

  return (
    <div className="p-8 bg-white border border-gray-300 rounded-xl shadow-xl">
      <h1 className="text-2xl font-DM_Sans font-bold">Leave Application</h1>
      <h1 className="text-lg font-DM_Sans font-normal pt-1 text-gray-500">Apply for Leave</h1>

      <form onSubmit={handleSubmit} className="mt-6">
        <div className="grid grid-cols-1 gap-10">
          <div>
            <label className="block text-gray-700 font-DM_Sans font-bold">Leave Type</label>
            <select 
              name="leave_type"
              value={formData.leave_type}
              onChange={handleChange}
              className="block w-full mt-1 font-DM_Sans p-2 border rounded bg-gray-100"
            >
              <option value="">Select Leave Type</option>
              <option value="maternity">Maternity</option>
              <option value="sickness">Sickness</option>
              <option value="marriage">Marriage</option>
            </select>
          </div>

          <div>
            <label className="block font-DM_Sans font-bold text-gray-700">Start Date</label>
            <input 
              type="date" 
              name="start_date"
              value={formData.start_date}
              onChange={handleChange}
              className="block w-full mt-1 p-2 border rounded bg-gray-100"
            />
          </div>

          <div>
            <label className="block font-DM_Sans font-bold text-gray-700">End Date</label>
            <input 
              type="date" 
              name="end_date"
              value={formData.end_date}
              onChange={handleChange}
              className="block w-full mt-1 p-2 border rounded bg-gray-100"
            />
          </div>

          <div>
            <label className="block font-DM_Sans font-bold text-gray-700">Reason</label>
            <textarea 
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              className="block w-full mt-1 p-2 border rounded bg-gray-100"
            />
          </div>
        </div>

        <button 
          type="submit" 
          className="mt-6 bg-blue-500 font-DM_Sans font-bold text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LeaveApplicationForm;
