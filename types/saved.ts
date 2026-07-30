export interface SavedUser {
    id: number;
    username: string;
    fullname: string;
    profilePicture: string | null;
}

export interface SavedPost {
    id: number;
    caption: string | null;
}

export interface Saved {
    id: number;
    user: SavedUser;
    post: SavedPost;
    createdAt: string;
}

export interface SavePostRequest {
    postId: number;
}

export interface GetSingleSavedRequest {
    postId: number;
}

export interface SavePostResponse {
    success: boolean;
    message: string;
    data?: Saved;
}

export interface GetSingleSavedResponse {
    success: boolean;
    message: string;
    data: Saved | null;
}

export interface GetAllSavedResponse {
    success: boolean;
    message: string;
    data: Saved[];
}