"use client";

import { useGetHomeFeedQuery } from "@/features/post/api/post.api";
import ProfileFeedView from "@/features/profile/components/ProfileFeedView";


export default function HomeFeed() {
  const { data, isLoading, isError, error } = useGetHomeFeedQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something went wrong.</div>;
  }

  return (
    <main className="min-h-screen lg:pl-64">
      <ProfileFeedView posts={data?.data ?? []} />
    </main>
  );
}