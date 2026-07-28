"use client";

import PostsGrid from "@/features/profile/components/PostsGrid";
import ProfileHeader from "@/features/profile/components/ProfileHeader";
import ProfileTabs, { ProfileTab } from "@/features/profile/components/ProfileTabs";
import StoryHighlights from "@/features/profile/components/StoryHighlights";
import BottomNavigation from "@/features/profile/Layout/ BottomNavigation";
import DesktopSidebar from "@/features/profile/Layout/DesktopSidebar";
import MobileTopbar from "@/features/profile/Layout/MobileTopbar";
import RightSidebar from "@/features/profile/Layout/RightSidebar";
import { useState } from "react";

export default function ProfilePage() {
  const [activeTab, setActiveTab] =
    useState<ProfileTab>("posts");

  const highlights = [
    {
      id: "1",
      title: "Design",
      image: "https://picsum.photos/200?random=1",
      isActive: true,
    },
    {
      id: "2",
      title: "Travel",
      image: "https://picsum.photos/200?random=1",
    },
    {
      id: "3",
      title: "Work",
      image: "https://picsum.photos/200?random=1",
    },
  ];

  const posts = [
    {
      id: "1",
      image: "https://picsum.photos/200?random=1",
      type: "carousel" as const,
    },
    {
      id: "2",
      image: "https://picsum.photos/200?random=1",
      type: "image" as const,
    },
    {
      id: "3",
      image: "https://picsum.photos/200?random=1",
      type: "reel" as const,
    },
    {
      id: "4",
      image: "https://picsum.photos/200?random=1",
      type: "image" as const,
    },
    {
      id: "5",
      image: "https://picsum.photos/200?random=1",
      type: "carousel" as const,
    }
  ];

  const suggestedUsers = [
    {
      id: "1",
      name: "Emma Watson",
      username: "emma",
      avatar: "https://picsum.photos/200?random=1",
    },
    {
      id: "2",
      name: "John Doe",
      username: "john",
      avatar: "https://picsum.photos/200?random=1",
    },
    {
      id: "3",
      name: "Sarah",
      username: "sarah",
      avatar: "https://picsum.photos/200?random=1",
    },
  ];

  const trends = [
    {
      id: "1",
      category: "Technology",
      title: "#NextJS",
      posts: "12.4K posts",
    },
    {
      id: "2",
      category: "Programming",
      title: "#React",
      posts: "24K posts",
    },
    {
      id: "3",
      category: "Design",
      title: "#UIUX",
      posts: "8.5K posts",
    },
  ];

  return (
    <>
      <MobileTopbar />

      <div className="mx-auto flex max-w-[1600px]">
        <DesktopSidebar />

        <main className="min-h-screen flex-1 pb-20 lg:pb-10">
          <ProfileHeader />

          <div className="mx-auto max-w-5xl px-4">
            <StoryHighlights highlights={highlights} />

            <ProfileTabs
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />

            {activeTab === "posts" && (
              <PostsGrid posts={posts} />
            )}

            {activeTab === "pinned" && (
              <div className="py-20 text-center text-muted-foreground">
                No pinned posts.
              </div>
            )}

            {activeTab === "saved" && (
              <div className="py-20 text-center text-muted-foreground">
                No saved posts.
              </div>
            )}

            {activeTab === "tagged" && (
              <div className="py-20 text-center text-muted-foreground">
                No tagged posts.
              </div>
            )}
          </div>
        </main>

        <RightSidebar
          suggestedUsers={suggestedUsers}
          trends={trends}
        />
      </div>

      <BottomNavigation />
    </>
  );
}