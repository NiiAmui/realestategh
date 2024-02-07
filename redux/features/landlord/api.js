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
      query: () => ({
        url: "/properties",
        method: "GET",
      }),
      providesTags: ['properties']
      // invalidatesTags:['auth','properties','message']
    }),
  }),
});


export const {useAddPropertyMutation,useFetchPropertiesQuery} = landlordApiSlice
