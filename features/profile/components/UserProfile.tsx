"use client";

import { useGetUserProfileQuery } from "@/features/profile/api/profile.api";
import ProfilePage from "./ProfilePage";
import { useGetUserPostsQuery } from "@/features/post/api/post.api";

interface Props {
  userId: number;
}

export default function UserProfile({ userId }: Props) {
  const { data, isLoading, isError } = useGetUserProfileQuery(userId);
  const {data:postsData,isLoading:postLoading,isError:postError}=useGetUserPostsQuery({userId:userId})

  const user = data?.data.user;
  const isFollowing = data?.data.isFollowing;
  const posts = postsData?.data ?? [];
  return (
    <ProfilePage
      user={user}
      posts={posts}
      isFollowing={isFollowing}
      isLoading={isLoading}
      isError={isError}
    />
  );
}