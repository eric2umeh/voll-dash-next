import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const sendOtpApi = createApi({
  reducerPath: "signUpApi",
  refetchOnFocus: false,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://volla.getfyba.com/vola/v1/auth/register",
  }),
  endpoints: (builder) => ({
   sendOtp: builder.mutation({
      query: (payload) => ({
        // url: "users",  
        method: "POST",
        body: payload, 
      }),
    }),
  }),
});

export const { useSendOtpMutation } = sendOtpApi;
