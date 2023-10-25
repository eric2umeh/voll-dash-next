"use client";
import { useState } from 'react';

const SendOtp = () => {
  const [formData, setFormData] = useState({ 
    phoneNumber: '',
  });
  const [phoneError, setPhoneError] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    router.push('/verify');
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-4">Send Otp</h1>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">     
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
             Enter Phone Number
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                phoneError ? 'border-red-500' : ''
              }`}
              id="phoneNumber"
              type="text"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
            />
            {phoneError && <p className="text-red-500 text-xs mt-2">{phoneError}</p>}
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SendOtp;