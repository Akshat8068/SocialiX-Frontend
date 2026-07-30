export interface PostUser {
    id: number;
    username: string;
    fullname: string;
    profilePicture: string | null;
}

export interface PostMedia {
    id: number;
    url: string;
    publicId: string;
    type: "IMAGE" | "VIDEO";
}

export interface Post {
    id: number;
    caption: string | null;
    user: PostUser;
    media: PostMedia[];
    createdAt: string;
    updatedAt: string;
}

export interface ApiResponse<T> {
    success: boolean;
    message: string;
    data: T;
}
export interface CreatePostRequest {
    caption?: string;
    media: File[];
}

export interface UpdatePostRequest {
    postId: number;
    caption?: string;
    media?: File[];
    formData:string
}

export interface PostRequest {
    postId: number;
}

export interface GetUserPostRequest {
    userId: number;
    postId: number;
}
export interface GetUserPostsRequest {
    userId: number;
}
export type PostResponse = ApiResponse<Post>;

export interface DeletePostResponse {
    success: boolean;
    message: string;
}

export type GetUserPostsResponse = ApiResponse<Post[]>;

export type GetUserPostResponse = ApiResponse<Post>;