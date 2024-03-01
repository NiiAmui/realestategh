import { apiSlice } from "@/redux/api/apiSlice";

const adminApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    makeInactive: builder.mutation({
      query: (propertyDetails) => ({
        url: "/properties",
        method: "POST",
        body: propertyDetails,
      }),
      invalidatesTags: ["properties"],
    }),
    fetchStatistics: builder.query({
      query: () => ({
        url: "/stats",
        method: "GET",
      }),
      providesTags: ["stats"],
      // invalidatesTags:['auth','properties','message']
    }),
    fetchLandlords: builder.query({
      query: () => ({
        url: "/landlords",
        method: "GET",
      }),
      providesTags: ["landlords"],
      // invalidatesTags:['auth','properties','message']
    }),
    fetchTenants: builder.query({
      query: () => ({
        url: "/tenants",
        method: "GET",
      }),
      providesTags: ["tenants"],
      // invalidatesTags:['auth','properties','message']
    }),
  }),
});

export const { useMakeInactiveMutation, useFetchStatisticsQuery,useFetchLandlordsQuery,useFetchTenantsQuery } =
  adminApiSlice;
