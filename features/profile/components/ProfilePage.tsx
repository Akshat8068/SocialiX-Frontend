"use client";

import ProfileFeedView from "@/features/profile/components/ProfileFeedView";
import ProfileHeader from "@/features/profile/components/ProfileHeader";
import ProfileTabs from "@/features/profile/components/ProfileTabs";
import { useState } from "react";
import { useAppSelector } from "@/store/hooks";
import { User } from "@/types/auth";
import { Post } from "@/types/post";

interface ProfilePageProps {
    user?:User
    isLoading:boolean
    isError:boolean
    posts?:Post[]
}
export default function ProfilePage({ user,isLoading,isError,posts }: ProfilePageProps) {
    const [showFeed, setShowFeed] = useState(false)
    const currentUser = useAppSelector((state) => state.auth.user)
    const isOwnProfile = currentUser?.id === user?.id
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError ) {
        return <div>Something went wrong.</div>;
    }
    if (!user) {
        return <div>Loading...</div>;
    }
    return (
        <>
            <div className=" w-full md:text-xl md:tracking-[0.5px] lg:text-3xl px-2 md:pl-22 lg:pl-68 pt-2">
                <ProfileHeader
                    user={user}
                    isOwnProfile={isOwnProfile}
                />
                {showFeed ? (
                    <ProfileFeedView posts={posts ?? []}/>
                ) : (
                    <ProfileTabs posts={posts?? []} isOwnProfile={isOwnProfile} onPostClick={() => setShowFeed(true)} />
                )}
            </div>
        </>
    )
}