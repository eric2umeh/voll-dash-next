import { getBaseUrl } from "./services";
import {
  createApi,  
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: getBaseUrl("admin"),
});

export const api = createApi({
    reducerPath: "admin",
    baseQuery,
    tagTypes: [
      "admin"   
    ],
    endpoints: () => ({}),
  });
  
  export const enhancedApi = api.enhanceEndpoints({
    endpoints: () => ({
      getPost: () => "test",
    }),
  });
  