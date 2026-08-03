import { User } from "./auth";

export interface LikeRequest {
    postId: number;
}

export interface ToggleLikeResponse {
    success: boolean;
    liked: boolean;
    message: string;
}

export interface GetLikedUsersResponse {
    success: boolean;
    message: string;
    data: User[];
}

export interface Comment {
    id: number;
    content: string;
    createdAt: string;
    updatedAt?: string;
    user: User;
    replies: Comment[];
}

export interface CreateCommentRequest {
    postId: number;
    content: string;
}

export interface UpdateCommentRequest {
    commentId: number;
    content: string;
}

export interface DeleteCommentRequest {
    commentId: number;
}

export interface GetPostCommentsRequest {
    postId: number;
}


export interface CreateCommentResponse {
    success: boolean;
    message: string;
    data: Comment;
}

export interface UpdateCommentResponse {
    success: boolean;
    message: string;
    data: Comment;
}

export interface DeleteCommentResponse {
    success: boolean;
    message: string;
}

export interface GetPostCommentsResponse {
    success: boolean;
    commentCount: number;
    data: Comment[];
}