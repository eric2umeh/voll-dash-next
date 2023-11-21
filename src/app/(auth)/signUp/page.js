"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSignUpMutation } from '../../api/signUp/signUpApi';
import { validationErrors } from '../../../validation';
import { DeviceId, DeviceModel, DeviceOS, DeviceType, NotificationToken, PhoneCountryCode } from '../../../constants';
const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    howDidYouHear: '',
    phoneNumber: '',
  });
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [userNameError, setUserNameError] = useState('');
  const [howDidYouHearError, setHowDidYouHearError] = useState('');

  const router = useRouter();
  
  const [signUp, { isLoading, isError, error }] = useSignUpMutation();
  const validationError = validationErrors(formData);
const handleSubmit = async (e) => {
  e.preventDefault();
  setUserNameError(validationError.userNameError || '');
  setFirstNameError(validationError.firstNameError || '');
  setLastNameError(validationError.lastNameError || '');
  setEmailError(validationError.emailError || '');
  setPasswordError(validationError.passwordError || '');
  setPhoneError(validationError.phoneError || '');
  setHowDidYouHearError(validationError.howDidYouHearError || '');

  if (Object.keys(validationError).length === 0) {
    try {
      /** 
       * payload request
       *  */ 
      const payload = {
        password: formData?.password,
        email: formData?.email,
        firstName: formData?.firstName,
        lastName: formData?.lastName,
        howDidYouHearAboutUs:formData?.howDidYouHear,
        phone : formData?.phoneNumber,
        phoneCountryCode: PhoneCountryCode,
        username: formData?.username,
        deviceId: DeviceId,
        deviceType: DeviceType,
        deviceOs: DeviceOS,
        deviceModel: DeviceModel,
        notificationToken: NotificationToken
    }
      const response = await signUp(payload).unwrap();
      console.log("response", response)
      if (response.error) {
        console.error('API request failed:', response?.error);
      } else {
        router.push('/sendOtp');
        alert('Signup successful!', response?.message);
        
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
};
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md">
       {isLoading ? (
          <div className="text-blue-500 text-sm mt-2">
            <div className="loader ease-linear rounded-full border-4 border-t-4 border-blue-500 h-12 w-12"></div> 
          </div>
        ) : (
          <>
            {isError && (
              <div className="text-red-500 text-sm mt-2">
                An error occurred: {error?.data?.errors} 
              </div>
            )}
             <div>
        <h1 className="text-2xl font-semibold text-center mb-4">Sign Up</h1>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
             className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              userNameError ? 'border-red-500' : ''
            }`}
              id="username"
              type="text"
              placeholder="Username"
              value={formData.username}
              onChange={(e) => {
                setFormData({ ...formData, username: e.target.value })
                setUserNameError('')
              
              }}
            />
             {userNameError && <p className="text-red-500 text-xs mt-2">{userNameError}</p>}
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              FirstName
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                firstNameError ? 'border-red-500' : ''
              }`}
              id="firstName"
              type="text"
              placeholder="firstName"
              value={formData.firstName}
              onChange={(e) => {setFormData({ ...formData, firstName: e.target.value })
              setFirstNameError('')
            }}
            />
             {firstNameError && <p className="text-red-500 text-xs mt-2">{firstNameError}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            LastName
            </label>
            <input
           className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            lastNameError ? 'border-red-500' : ''
          }`}
              id="lastName"
              type="text"
              placeholder="LastName"
              value={formData.lastName}
              onChange={(e) =>{ setFormData({ ...formData, lastName: e.target.value })
            setLastNameError('')
            }}
            />
             {lastNameError && <p className="text-red-500 text-xs mt-2">{lastNameError}</p>}
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
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value })
                setEmailError('')
              }
            
            }
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
              onChange={(e) => {
                setFormData({ ...formData, password: e.target.value })
                setPasswordError('')
            
            
            }}
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
              onChange={(e) => {
                setFormData({ ...formData, phoneNumber: e.target.value })
                setPhoneError('')
            
            }}
            />
            {phoneError && <p className="text-red-500 text-xs mt-2">{phoneError}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
             How Did You Hear About Us
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                howDidYouHearError ? 'border-red-500' : ''
              }`}
              id="howDidYouHear"
              type="text"
              placeholder="How Did You Hear About Us"
              value={formData.howDidYouHear}
              onChange={(e) => {
                setFormData({ ...formData, howDidYouHear: e.target.value })
                setHowDidYouHearError('')
            
            }}
            />
            {howDidYouHearError && <p className="text-red-500 text-xs mt-2">{howDidYouHearError}</p>}
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
          </>
        )}
       
       
      </div>
    </div>
  );

  
};

export default SignUp;