import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    // baseUrl: "https://volla.getfyba.com/vola/v1/users/641057a0171c5eb9a77cca8e",
    baseUrl: "https://volla.getfyba.com/vola/v1/users/profile/fetch",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState()).auth.token;
      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
    
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "users",
    }),
  }),
});

export const { useGetUsersQuery } = userApi;