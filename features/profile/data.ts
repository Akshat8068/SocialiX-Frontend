import { DashboardStats, Post, StoryHighlight, UserProfile } from "./types";

export const profile: UserProfile = {
    id: "1",
    name: "Alex Rivera",
    username: "ariveria_creative",
    avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43b?w=500",

    bio: "Digital Product Designer & Tech Enthusiast. Building the future of social connectivity. Exploring the intersection of human psychology and kinetic UI systems. 🎨✨",

    website: "https://socialix.app/alex",

    verified: true,
    isPro: true,

    posts: 124,
    followers: 8200,
    following: 428,
};

export const dashboardStats: DashboardStats = {
    profileVisits: 1402,
    engagement: 4.8,
    reachedAccounts: 24500,
};

export const storyHighlights: StoryHighlight[] = [
    {
        id: "1",
        title: "Designs",
        cover:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500",
    },
    {
        id: "2",
        title: "Travel",
        cover:
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500",
    },
    {
        id: "3",
        title: "Work",
        cover:
            "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=500",
    },
    {
        id: "4",
        title: "Lifestyle",
        cover:
            "https://images.unsplash.com/photo-1494526585095-c41746248156?w=500",
    },
];
export const posts: Post[] = [
    {
        id: "1",
        image:
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700",
        type: "carousel",
        likes: 1200,
        comments: 84,
        badge: "New Project",
        isPinned: true,
    },
    {
        id: "2",
        image:
            "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=700",
        type: "image",
        likes: 452,
        comments: 21,
    },
    {
        id: "3",
        image:
            "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=700",
        type: "video",
        likes: 810,
        comments: 42,
    },
    {
        id: "4",
        image:
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=700",
        type: "image",
        likes: 390,
        comments: 14,
    },
    {
        id: "5",
        image:
            "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=700",
        type: "image",
        likes: 625,
        comments: 18,
    },
    {
        id: "6",
        image:
            "https://images.unsplash.com/photo-1518770660439-4636190af475?w=700",
        type: "video",
        likes: 998,
        comments: 57,
    },
    {
        id: "7",
        image:
            "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=700",
        type: "image",
        likes: 715,
        comments: 33,
    },
    {
        id: "8",
        image:
            "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?w=700",
        type: "carousel",
        likes: 532,
        comments: 25,
    },
    {
        id: "9",
        image:
            "https://images.unsplash.com/photo-1497366216548-37526070297c?w=700",
        type: "image",
        likes: 884,
        comments: 61,
    },
];
export const profileTabs = [
    {
        id: "posts",
        label: "Posts",
        icon: "grid_view",
    },
    {
        id: "pinned",
        label: "Pinned",
        icon: "push_pin",
    },
    {
        id: "saved",
        label: "Saved",
        icon: "bookmark",
    },
    {
        id: "tagged",
        label: "Tagged",
        icon: "assignment_ind",
    },
];