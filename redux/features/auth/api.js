import { apiSlice } from "@/redux/api/apiSlice";

const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
      // invalidatesTags:['auth','properties','message']
    }),
    register: builder.mutation({
      query: (userDetails) => ({
        url: "/user",
        method: "POST",
        body: userDetails,
      }),
      // invalidatesTags:['auth','properties','message']
    }),
    fetchUser: builder.query({
      query: () => ({
        url: "/user",
        method: "GET",
      }),
      // invalidatesTags:['auth','properties','message']
    }),
    tryPing: builder.query({
      query: () => ({
        url: "/ping",
        method: "GET",
      }),
      // invalidatesTags:['auth','properties','message']
    }),
  }),
});


export const {useLoginMutation,useRegisterMutation,useFetchUserQuery,useTryPingQuery} = authApiSlice
