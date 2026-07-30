import baseApi from "@/store/api/baseApi";
import {
    GetAllSavedResponse,
    GetSingleSavedRequest,
    GetSingleSavedResponse,
    SavePostRequest,
    SavePostResponse,
} from "@/types/saved"
export const savedApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        savePost: builder.mutation<SavePostResponse, SavePostRequest>({
            query: ({ postId }) => ({
                url: `/saved/${postId}`,
                method: "POST",
            }),
            invalidatesTags: ["Post","Saved"],
        }),

        getSingleSaved: builder.query<GetSingleSavedResponse,GetSingleSavedRequest>({
            query: ({ postId }) => ({
                url: `/saved/${postId}`,
            }),
            providesTags: ["Post","Saved"],
        }),

        getAllSaved: builder.query<GetAllSavedResponse, void>({
            query: () => ({
                url: "/saved",
            }),
            providesTags: ["Post","Saved"],
        }),
    }),
});

export const {
    useSavePostMutation,
    useGetSingleSavedQuery,
    useGetAllSavedQuery,
} = savedApi;