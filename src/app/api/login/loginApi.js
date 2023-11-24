import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const loginApi = createApi({
  reducerPath: "signUpApi",
  refetchOnFocus: false,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://volla.getfyba.com/vola/v1/auth/login",
  }),
  endpoints: (builder) => ({
   login: builder.mutation({
      query: (payload) => ({
        // url: "users",  
        method: "POST",
        body: payload, 
      }),
    }),
  }),
});

export const { useLoginMutation} = loginApi;
