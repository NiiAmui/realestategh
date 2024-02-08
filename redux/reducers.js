import { combineReducers } from "@reduxjs/toolkit";

// import all the other reducers
import authReducer from "./features/auth/index";
import landlordReducer from './features/landlord/index'
import { apiSlice } from "./api/apiSlice";

// the package to persist the reducers
import { persistReducer } from "redux-persist";
// the storage for the persist
import storage from "redux-persist/lib/storage";
// configuration for the persisted reducer
const persistConfig = {
  key: "realestate",
  version: 1,
  storage,
};

// the reducers combined
const reducers = combineReducers({
  auth: authReducer,
  landlord:landlordReducer,
  [apiSlice.reducerPath]: apiSlice.reducer
});

const persistedReducer = persistReducer(persistConfig, reducers);

export default persistedReducer;
