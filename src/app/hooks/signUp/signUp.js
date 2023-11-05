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
      console.error("error", error);

      if (typeof error === "object" && error !== null && "responseMsg" in error) {
        setStatusMessage(error);
      } else {
        setStatusMessage("Currently unable to process your request");
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