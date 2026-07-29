import { ApiResponse } from "./api";
import { User } from "./auth";

export interface UpdateProfileRequest {
    fullname: string;
    username?: string;
    bio?: string;
    website?: string;
    accountType?: "PUBLIC" | "PRIVATE";
    professionalAccount?: boolean;
}

export interface UpdateProfilePictureRequest {
    profilePicture: File;
}

export type GetProfileResponse = ApiResponse<User>;

export type UpdateProfileResponse = ApiResponse<User>;

export interface UpdateProfilePictureData {
    profilePicture: string;
}

export type UpdateProfilePictureResponse =
    ApiResponse<UpdateProfilePictureData>;

export type RemoveProfilePictureResponse = ApiResponse<null>;