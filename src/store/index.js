import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore,combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import { userSlice } from "../redux/dashboard/slice";
import { api as admin } from "../redux/api";
import { useDispatch, useSelector } from "react-redux";


const reducers = combineReducers({
[admin.reducerPath]: admin.reducer,
 user: userSlice.reducer

})

const persistConfig = {
    key: "root",
    version: 1,
    storage: AsyncStorage,
};
  
  const persistedReducer = persistReducer(persistConfig, reducers);


export const store = configureStore({
    reducer: persistedReducer,
    middleware: defaultMiddleware => [
      ...defaultMiddleware({
        serializableCheck: false, 
        immutableCheck: false,
    }),
    admin.middleware,
    
],})

/**
 * install react-redux and AsyncStorage
 */

export const persistor = persistStore(store);
setupListeners(store.dispatch);
export const useAppSelector = useSelector;
export const useAppDispatch = useDispatch;