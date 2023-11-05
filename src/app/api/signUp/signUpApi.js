import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://volla.getfyba.com/vola/v1/auth/register",
  }),
  endpoints: (builder) => ({
   signUp: builder.mutation({
      query: (payload) => ({
        url: "users",  
        method: "POST",
        body: payload, 
      }),
    }),
  }),
});

export const { useSignUpMutation } = userApi;
