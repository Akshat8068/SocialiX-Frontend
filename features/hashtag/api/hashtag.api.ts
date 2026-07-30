import baseApi from "@/store/api/baseApi";
import { CreateHashtagRequest,  DeleteHashtagRequest, DeleteHashtagResponse, GetHashtagRequest, HashtagResponse } from "@/types/hashTag";

export const hashtagApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createHashtag: builder.mutation<HashtagResponse,CreateHashtagRequest>({
            query: (data) => ({
                url: "/hashtag",
                method: "POST",
                body:data,
            }),
            invalidatesTags: ["Post","Hashtags"],
        }),

        getHashtag: builder.query<HashtagResponse, GetHashtagRequest>({
            query: ({ hashTag }) => ({
                url: "/hashtag",
                method: "GET",
                body: {
                    hashTag,
                },
            }),
            providesTags: ["Post","Hashtags"],
        }),

        deleteHashtag: builder.mutation<DeleteHashtagResponse,DeleteHashtagRequest>({
            query: ({ hashtagId }) => ({
                url: `/hashtag/${hashtagId}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Post","Hashtags"],
        }),
    }),
});

export const {
    useCreateHashtagMutation,
    useGetHashtagQuery,
    useDeleteHashtagMutation,
} = hashtagApi;