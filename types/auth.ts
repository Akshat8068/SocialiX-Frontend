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
  isVerified: boolean;
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
