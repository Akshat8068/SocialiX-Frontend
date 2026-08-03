"use client";

import ProfileFeedView from "@/features/profile/components/ProfileFeedView";
import ProfileHeader from "@/features/profile/components/ProfileHeader";
import ProfileTabs from "@/features/profile/components/ProfileTabs";
import { useState } from "react";
import { useAppSelector } from "@/store/hooks";
import { User } from "@/types/auth";
import { Post } from "@/types/post";
import { useGetFollowersQuery, useGetFollowingQuery, useRemoveFollowerMutation, useUnFollowUserMutation } from "@/features/follow/api/follow.api";
import UserListModel from "@/components/UserListModel/UserListModel";

interface ProfilePageProps {
    user?: User
    isLoading: boolean
    isError: boolean
    posts?: Post[]
    isFollowing?: boolean;
}
export default function ProfilePage({ user, isLoading, isError, isFollowing }: ProfilePageProps) {
    const [showFeed, setShowFeed] = useState(false)
    const [openModal, setOpenModal] = useState(false);
    const [modalType, setModalType] = useState<"followers" | "following">("followers")
    const openFollowers = () => {
        setModalType("followers");
        setOpenModal(true);
    };

    const openFollowing = () => {
        setModalType("following");
        setOpenModal(true);
    }
    const currentUser = useAppSelector((state) => state.auth.user)
    const isOwnProfile = currentUser?.id === user?.id
    const userId = user?.id
    const { data: followersData } = useGetFollowersQuery(
        { userId: userId! },
        {
            skip: !userId,
        }
    );
    const [unFollowUser] = useUnFollowUserMutation();
    const [removeFollower] = useRemoveFollowerMutation()
    const { data: followingData } = useGetFollowingQuery(
        { userId: userId! },
        {
            skip: !userId,
        }
    )
    const userPosts = user?.post ?? [];
    const postCount = userPosts.length;
    const followerUsers =
        followersData?.data.map((item) => ({
            id: item.follower.id,
            fullName: item.follower.fullname,
            username: item.follower.username,
            profilePicture: item.follower.profilePicture,
            isVerified: item.follower.isVerified,
            isFollowing: false,
        })) ?? [];
    const followingUsers =
        followingData?.data.map((item) => ({
            id: item.following.id,
            fullName: item.following.fullname,
            username: item.following.username,
            profilePicture: item.following.profilePicture,
            isVerified: item.following.isVerified,
            isFollowing: false,
        })) ?? [];
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
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
                    postCount={postCount}
                    isOwnProfile={isOwnProfile}
                    followerCount={followersData?.count ?? 0}
                    followingCount={followingData?.count ?? 0}
                    onFollowersClick={openFollowers}
                    onFollowingClick={openFollowing}
                />
                {showFeed ? (
                    <ProfileFeedView posts={userPosts} />
                ) : (
                    <ProfileTabs posts={userPosts} isOwnProfile={isOwnProfile} onPostClick={() => setShowFeed(true)} />
                )}
            </div>
            <UserListModel
                open={openModal}
                onClose={() => setOpenModal(false)}
                type={modalType}
                onRemoveFollower={(id) => removeFollower({ userId: id })}
                onUnfollow={(id) => unFollowUser({ userId: id })}
                title={modalType === "followers" ? "Followers" : "Following"}
                count={
                    modalType === "followers"
                        ? followersData?.count ?? 0
                        : followingData?.count ?? 0
                }
                users={
                    modalType === "followers"
                        ? followerUsers
                        : followingUsers
                }
                loading={false}
                search=""
                onSearchChange={() => { }}
            />
        </>
    )
}