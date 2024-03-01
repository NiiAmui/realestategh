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
    fetchOwnerProperties: builder.query({
      query: (id) => ({
        url: `/properties/owner/${id}`,
        method: "GET",
      }),
      providesTags: ['properties']
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


export const {useAddPropertyMutation,useFetchOwnerPropertiesQuery,useFetchMessagesQuery} = landlordApiSlice
