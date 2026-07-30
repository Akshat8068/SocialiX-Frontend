import { ApiResponse } from "./api";
import { User } from "./auth";


export interface Hashtag {
    id: number;
    name: string;
    isPublic: boolean;
    postCount: number;
    owner: User;
    createdAt: string;
}
export interface CreateHashtagRequest {
    name: string;
}

export interface GetHashtagRequest {
    hashTag: string;
}

export interface DeleteHashtagRequest {
    hashtagId: number;
}

export type HashtagResponse = ApiResponse<Hashtag>;

export interface DeleteHashtagResponse {
    success: boolean;
    message: string;
}