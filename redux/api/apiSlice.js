import { headers } from "@/next.config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, logout } from "../features/auth/index";

// set up the base query
const baseQuery = fetchBaseQuery({
  // baseUrl: "http://localhost:8080",
  baseUrl: "https://kq2t2qz5-8080.uks1.devtunnels.ms/",
  credentials: "include",
  // prepareHeaders: (headers,{getSta})
});

export const apiSlice = createApi({
  baseQuery: baseQuery,
  tagTypes: ["auth", "properties", "message"],
  endpoints: (builder) => ({}),
});
