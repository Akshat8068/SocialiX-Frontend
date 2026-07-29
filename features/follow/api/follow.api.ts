import baseApi from "@/store/api/baseApi";
import { AcceptRequestResponse,  CancelRequestResponse, FollowActionRequest,  FollowersResponse,  FollowingResponse,  FollowRequest,  FollowResponse, FriendsResponse, MutualFollowersResponse, PendingRequestsResponse, RejectRequestResponse, RemoveFollowerResponse, SentRequestsResponse, UnfollowResponse } from "../types";

export const followApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        followUser: builder.mutation<FollowResponse, FollowRequest>({
            query: ({ userId }) => ({
                url: `/follow/${userId}`,
                method: "POST",
            }),
            invalidatesTags: ["Follow", "Profile"],
        }),

        unFollowUser: builder.mutation<UnfollowResponse, FollowRequest>({
            query: ({ userId }) => ({
                url: `/follow/${userId}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Follow", "Profile"],
        }),

        acceptRequest: builder.mutation<AcceptRequestResponse,FollowActionRequest>({
            query: ({ id }) => ({
                url: `/follow/request/${id}/accept`,
                method: "PUT",
            }),
            invalidatesTags: ["Follow"],
        }),

        rejectRequest: builder.mutation<RejectRequestResponse,FollowActionRequest>({
            query: ({ id }) => ({
                url: `/follow/request/${id}/reject`,
                method: "PUT",
            }),
            invalidatesTags: ["Follow"],
        }),

        cancelRequest: builder.mutation<CancelRequestResponse,FollowActionRequest>({
            query: ({ id }) => ({
                url: `/follow/request/${id}/cancel`,
                method: "DELETE",
            }),
            invalidatesTags: ["Follow"],
        }),

        removeFollower: builder.mutation<RemoveFollowerResponse,FollowRequest>({
            query: ({ userId }) => ({
                url: `/follow/remove-follower/${userId}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Follow", "Profile"],
        }),

        getFollowers: builder.query<FollowersResponse,FollowRequest>({
            query: ({ userId }) => ({
                url: `/follow/follower/${userId}`,
            }),
            providesTags: ["Follow"],
        }),

        getFollowing: builder.query<FollowingResponse,FollowRequest>({
            query: ({ userId }) => ({
                url: `/follow/following/${userId}`,
            }),
            providesTags: ["Follow"],
        }),

        getPendingRequest: builder.query<PendingRequestsResponse,void>({
            query: () => ({
                url: "/follow/requests",
            }),
            providesTags: ["Follow"],
        }),

        getSentRequest: builder.query<SentRequestsResponse,void>({
            query: () => ({
                url: "/follow/sent-requests",
            }),
            providesTags: ["Follow"],
        }),

        mutualFollow: builder.query<MutualFollowersResponse,FollowRequest>({
            query: ({ userId }) => ({
                url: `/follow/mutual/${userId}`,
            }),
            providesTags: ["Follow"],
        }),

        getFriends: builder.query<FriendsResponse, void>({
            query: () => ({
                url: "/follow/friends",
            }),
            providesTags: ["Follow"],
        }),
    }),
});

export const {
    useFollowUserMutation,
    useUnFollowUserMutation,
    useAcceptRequestMutation,
    useRejectRequestMutation,
    useCancelRequestMutation,
    useRemoveFollowerMutation,
    useGetFollowersQuery,
    useGetFollowingQuery,
    useGetPendingRequestQuery,
    useGetSentRequestQuery,
    useMutualFollowQuery,
    useGetFriendsQuery,
} = followApi;