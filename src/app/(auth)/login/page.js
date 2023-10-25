"use client";import { useState } from 'react';
import { useRouter } from 'next/navigation'
import { isEmailValid, isPasswordValid } from '../../../validation';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(formData.email === ""){
      setEmailError('Enter a valid email address');
      return;
    }
    if(formData.password === ""){
      setPasswordError('Enter Password');
      return;
    }
    if (!isEmailValid(formData.email)) {
      setEmailError('Invalid email address');
      return;
    }

    if (!isPasswordValid(formData.password)) {
      setPasswordError('Password must be at least 8 characters long, contain an uppercase letter, a lowercase letter, and a special character.');
      return;
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