import { headers } from "@/next.config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, logout } from "../features/auth/index";



// set up the base query
const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8080",
  // baseUrl: "https://kq2t2qz5-8080.uks1.devtunnels.ms/",
  credentials: "include",
  mode: "cors",
  prepareHeaders: (headers,{getState})=> {
    // const altToken = getState().auth?.token
    // const token = localStorage.getItem('token') || ''
    // console.log(headers,'hi');
    // if(token){
    //   headers.set("Authorization", `${token}`)
    // }
    return headers
  }
});

export const apiSlice = createApi({
  baseQuery: baseQuery,
  tagTypes: ["auth", "properties", "message",'user'],
  endpoints: (builder) => ({}),
});
