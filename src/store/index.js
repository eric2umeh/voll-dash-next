import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/slice";
import { userApi } from "../redux/userApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    counterReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([userApi.middleware]),
});

setupListeners(store.dispatch);

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;