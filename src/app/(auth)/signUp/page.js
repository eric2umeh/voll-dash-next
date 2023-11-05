"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import useSignUpUser from "../../hooks/signUp/signUp"
const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    howDidYouHear: '',
    phoneNumber: '',
    countryCode: '',
  });
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const router = useRouter();
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
   
  // };
  const { statusMessage, addUser, loading,} = useSignUpUser();
const handleSubmit =() => {
  const payload = {
    password: "1234567890",
    email: "noel@gmail.com",
    firstName: "john",
    lastName : "doe",
    howDidYouHearAboutUs: "facebook",
    phone:"08121271091",
    phoneCountryCode: "+234",
    username: "neo",
    deviceId
    : "GWT2167632b3",
    deviceType: "WEB",
    notificationToken: "6aa739eb-aac5-c436-2f29-c5ddf5a23446aa739aeb-aac5-c436-2f29-c5ddf5a23d44"
  
  }
addUser(payload)
  router.push('/sendOtp');
}
 console.log("statusMessage", statusMessage)
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-4">Sign Up</h1>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                emailError ? 'border-red-500' : ''
              }`}
              id="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            {emailError && <p className="text-red-500 text-xs mt-2">{emailError}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                passwordError ? 'border-red-500' : ''
              }`}
              id="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            {passwordError && <p className="text-red-500 text-xs mt-2">{passwordError}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
              Phone Number
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
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;