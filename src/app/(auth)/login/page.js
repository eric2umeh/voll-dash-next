"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import { isEmailValid, isPasswordValid, validationField } from '../../../validation';
import {useLoginMutation} from "../../api/login/loginApi"
import { DeviceId, DeviceModel, DeviceOS, DeviceType, NotificationToken,  } from '../../../constants';


const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '', otp: '' });
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [otpError, setOtpError] = useState('');
  const router = useRouter();

  const [login, { isLoading, isError, error }] = useLoginMutation();
  const validationError = validationField(formData);
  const handleSubmit = async (e) => {
   
    e.preventDefault();
    setEmailError(validationError.emailError || '');
    setPasswordError(validationError.passwordError || '');
    setOtpError(validationError.otpError || '')
  
  
    if (Object.keys(validationError).length === 0) {
      try {
        /** 
         * payload request
         *  */ 
        const payload = {
          password: formData?.password,
          email: formData?.email,
          deviceId: DeviceId,
          deviceType: DeviceType,
          deviceOs: DeviceOS,
          deviceModel: DeviceModel,
          notificationToken: NotificationToken,
          ipAddress: "192.168.4.4"
         
      }
        const response = await login(payload).unwrap();
        console.log("response", response)
        if (response.error) {
          console.error('API request failed:', response?.error);
        } else {
          router.push('/dashboard');
          alert('login successful!', response?.message);
          
        }
      } catch (error) {
        console.error('An error occurred:', error);
      }
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-4">Login</h1>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                setEmailError('');
              }}
            />
            {emailError && <p className="text-red-500 text-xs mt-2">{emailError}</p>}
          </div>
          <div className="mb-6">
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
              onChange={(e) => {
                setFormData({ ...formData, password: e.target.value });
                setPasswordError('');
              }}
            />
            {passwordError && <p className="text-red-500 text-xs mt-2">{passwordError}</p>}
          </div>


          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
             Otp
            </label>
            
          <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                otpError ? 'border-red-500' : ''
              }`}
              id="password"
              type="password"
              placeholder="Password"
              value={formData.otp}
              onChange={(e) => {
                setFormData({ ...formData, otp: e.target.value });
                setOtpError('');
              }}
            />
            {otpError && <p className="text-red-500 text-xs mt-2">{otpError}</p>}
          </div>
        
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
            <p className="text-sm">
              Do not have an account?{' '}
             
              <a
                className="text-blue-500 hover:underline cursor-pointer"
                onClick={() => router.push('/signUp')}
              >
                Sign Up
              </a>
        
             
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;