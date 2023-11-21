"use client";

import { useState } from "react";
import { useSignUpMutation } from "../../api/signUp/signUpApi";

const useSignUpUser = () => {
  const [loading, setLoading] = useState(false);
  const [signUpUser] = useSignUpMutation();
  const [statusMessage, setStatusMessage] = useState("");

  const addUser = async (payload) => {
    setLoading(true);

    try {
      const response = await signUpUser(payload).unwrap();
      setLoading(false); // Corrected loading state
      const { statusCode, message, status } = response;

      if (statusCode === 200) {
        console.log("response", response);
        setStatusMessage(response);
      } else {
        setStatusMessage(response); // Corrected error handling
      }
    } catch (error) {
      setLoading(false);
  console.error("Error during API request:", error);
  // Log additional context if available, e.g., request payload
  console.error("Request Payload:", payload);

  if (error.response && error.response.status) {
    // Handle specific HTTP error codes
    // ...
  } else {
    setStatusMessage("An unknown error occurred");
  }
    }
  };

  return {
    statusMessage,
    addUser,
    loading,
  };
};

export default useSignUpUser;