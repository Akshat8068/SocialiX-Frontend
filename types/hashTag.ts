export interface HashtagOwner {
    id: number;
    username: string;
    fullname: string;
}

export interface Hashtag {
    id: number;
    name: string;
    isPublic: boolean;
    postCount: number;
    owner: HashtagOwner;
    createdAt: string;
}

export interface ApiResponse<T> {
    success: boolean;
    message: string;
    data: T;
}

/* -------------------------------------------------------------------------- */
/*                                   Requests                                 */
/* -------------------------------------------------------------------------- */

export interface CreateHashtagRequest {
    name: string;
}

export interface GetHashtagRequest {
    hashTag: string;
}

export interface DeleteHashtagRequest {
    hashtagId: number;
}


export type CreateHashtagResponse = ApiResponse<Hashtag>;

export type GetHashtagResponse = ApiResponse<Hashtag>;

export interface DeleteHashtagResponse {
    success: boolean;
    message: string;
}