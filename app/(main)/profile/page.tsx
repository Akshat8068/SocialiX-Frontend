"use client";

import ProfileFeedView from "@/features/profile/components/ProfileFeedView";
import ProfileHeader from "@/features/profile/components/ProfileHeader";
import ProfileTabs from "@/features/profile/components/ProfileTabs";
import { useState } from "react";


export default function ProfilePage() {
  const [showFeed, setShowFeed] = useState(false)
  return (
    <>
      <div className=" w-full md:text-xl md:tracking-[0.5px] lg:text-3xl px-2 md:pl-22 lg:pl-68 pt-2">
      <ProfileHeader />
        {showFeed ? (
          <ProfileFeedView />
        ) : (
          <ProfileTabs onPostClick={() => setShowFeed(true)} />
        )}
    </div>
    </>
  )
}