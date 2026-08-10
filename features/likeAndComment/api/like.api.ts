import { postApi } from "@/features/post/api/post.api";
import baseApi from "@/store/api/baseApi";
import { GetLikedUsersResponse, LikeRequest, ToggleLikeResponse } from "@/types/likeandComment";

export const likeApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        toggleLike: builder.mutation<ToggleLikeResponse, LikeRequest>({
            query: ({ postId }) => ({
                url: `/likes/${postId}`,
                method: "POST",
            }),

            async onQueryStarted(
                { postId },
                { dispatch, queryFulfilled }
            ) {
                // Optimistically update the post cache
                const patchResult = dispatch(
                    postApi.util.updateQueryData(
                       "getHomeFeed",
                        undefined,
                        (draft) => {
                            const post = draft.data?.find(
                                (post) => post.id === postId
                            );

                            if (post) {
                                post.isLiked = !post.isLiked;

                                if (post.isLiked) {
                                    post.likeCount += 1;
                                } else {
                                    post.likeCount -= 1;
                                }
                            }
                        }
                    )
                );

                try {

                    await queryFulfilled
                } catch {
                    // API failed 
                    patchResult.undo();
                }
            },

            invalidatesTags: ["Post", "Like"],
        }),

        getLikedUsers: builder.query<GetLikedUsersResponse, LikeRequest>({
            query: ({ postId }) => ({
                url: `/likes/${postId}/users`,
            }),
            providesTags: ["Post","Like"],
        }),
    }),
});

export const {
    useToggleLikeMutation,
    useGetLikedUsersQuery,
} = likeApi;