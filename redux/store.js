"use client";

import { configureStore } from "@reduxjs/toolkit";
// import the reducers
import reducers from "./reducers";
import { apiSlice } from "./api/apiSlice";

// setup the store with the various reducers
export const store = configureStore({
  reducer: { [apiSlice.reducerPath]: apiSlice.reducer, ...reducers },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
