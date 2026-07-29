export interface profile {
    id: string;
    name: string;
    username: string;
    bio: string;
    avatar: string;
    website: string;
    verified: boolean;
    followers: number;
    following: number;
    posts: number;
}
// src/types/profile.ts

export interface UserProfile {
    id: string;
    name: string;
    username: string;
    avatar: string;
    bio: string;
    website?: string;
    verified: boolean;
    isPro: boolean;

    posts: number;
    followers: number;
    following: number;
}

export interface StoryHighlight {
    id: string;
    title: string;
    cover: string;
}

export interface Post {
    id: string;
    image: string;
    type: "image" | "video" | "carousel";

    likes: number;
    comments: number;

    isPinned?: boolean;
    isSaved?: boolean;
    isTagged?: boolean;

    badge?: string;
}

export interface DashboardStats {
    profileVisits: number;
    engagement: number;
    reachedAccounts: number;
}

export interface ProfileTab {
    id: "posts" | "pinned" | "saved" | "tagged";
    label: string;
    icon: string;
}