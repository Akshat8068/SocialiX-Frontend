import { ApiResponse } from "@/types/api";
import { User } from "@/types/auth";

export type FollowStatus = "PENDING" | "ACCEPTED";

export interface Follow {
    id: number;
    follower: User;
    following: User;
    status: FollowStatus;
    createdAt: string;
    updatedAt: string;
}

export interface FollowRequest {
    userId: number;
}
export interface FollowActionRequest {
    id: number;
}


export type FollowResponse = ApiResponse<Follow>;

export type FollowersResponse = ApiResponse<User[]>;

export type FollowingResponse = ApiResponse<User[]>;

export type PendingRequestsResponse = ApiResponse<Follow[]>;

export type SentRequestsResponse = ApiResponse<Follow[]>;

export type MutualFollowersResponse = ApiResponse<User[]>;

export type FriendsResponse = ApiResponse<User[]>;

export type UnfollowResponse = ApiResponse<null>;

export type RemoveFollowerResponse = ApiResponse<null>;

export type AcceptRequestResponse = ApiResponse<Follow>;

export type RejectRequestResponse = ApiResponse<null>;

export type CancelRequestResponse = ApiResponse<null>;