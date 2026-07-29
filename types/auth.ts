import { ApiResponse } from "./api";

export interface RegisterRequest {
  fullname: string;
  username: string;
  email: string;
  password: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}
export interface Media {
  id: number;
  publicId: string;
  secureUrl: string;
}

export interface Post {
  id: number;
  caption: string;
  visibility: string;
  media: Media[];
  likeCount: number;
  commentCount: number;
  createdAt: string;
}

export interface User {
  id: number;
  fullname: string;
  username: string;
  email: string;
  bio?: string;
  website?: string;
  profilePicture?: string | null;
  accountType?: "PUBLIC" | "PRIVATE";
  professionalAccount?: boolean;
  isVerified?: boolean;
  postCount?: number;
  followercount?: number
  followingCount?: number
  post: Post[];
}

export type AuthResponse = ApiResponse<User>

export interface RefreshTokenResponse {
  success: boolean;
  message: string;
  accessToken: string;
}

export interface VerifyEmailRequest {
  email: string;
  otp: string;
}

export type VerifyEmailResponse = ApiResponse<null>

export interface ForgetEmailRequest {
  email: string;
}
export type ForgetEmailResponse = ApiResponse<null>
export interface ResetPasswordRequest {
  email: string;
  otp: string;
  newPassword:string;
}

export type ResetPasswordResponse = ApiResponse<null>
