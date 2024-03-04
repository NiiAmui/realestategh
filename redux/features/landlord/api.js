import { apiSlice } from "@/redux/api/apiSlice";

const landlordApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addProperty: builder.mutation({
      query: (propertyDetails) => ({
        url: "/properties",
        method: "POST",
        body: propertyDetails,
      }),
      invalidatesTags:['properties',]
    }),
    fetchProperties: builder.query({
      query: (id) => ({
        url: `/properties`,
        method: "GET",
      }),
      providesTags: ['properties']
      // invalidatesTags:['auth','properties','message']
    }),
    fetchOwnerProperties: builder.query({
      query: (id) => ({
        url: `/properties/owner/${id}`,
        method: "GET",
      }),
      providesTags: ['ownerProperties']
      // invalidatesTags:['auth','properties','message']
    }),
    fetchMessages: builder.query({
      query: () => ({
        url: `/chat`,
        method: "GET",
      }),
      providesTags: ["messages"],
      // invalidatesTags:['auth','properties','message']
    }),
  }),
});


export const {useAddPropertyMutation,useFetchOwnerPropertiesQuery,useFetchMessagesQuery,useFetchPropertiesQuery} = landlordApiSlice
