import { apiSlice } from "@/redux/api/apiSlice";

const tenantApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    sendMessage: builder.mutation({
      query: (data) => ({
        url: "/chat",
        method: "POST",
        body: {
          message: data.message,
          receiver: data.receiver,
        },
      }),
      invalidatesTags: ["tenant"],
    }),
    fetchMessages: builder.query({
      query: () => ({
        url: "/chat",
        method: "GET",
      }),
      providesTags: ["tenant"],
      // invalidatesTags:['auth','properties','message']
    }),
  }),
});

export const { useSendMessageMutation, useFetchMessagesQuery } = tenantApiSlice;
