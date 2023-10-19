import { api } from "../api";
import paths from "./paths";

export const adminUserApi = api.injectEndpoints({
    endpoints: build => ({
      getUsersList: build.query({
        query: `${paths.getUsers}`,
      }),
    }),
});
export const { useGetUserListQuery } = adminUserApi;
  