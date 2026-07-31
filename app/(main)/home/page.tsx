"use client";

import FeedPost from "@/features/post/components/FeedPost";
import { dummyPosts } from "@/features/post/data";



export default function HomeFeed() {
  return (
    <main className="min-h-screen lg:pl-64">
      <div className="mx-auto max-w-200 px-4 py-6">
        {dummyPosts.map((post) => (
          <FeedPost
            key={post.id}
            post={post}
          />
        ))}
      </div>
    </main>
  );
}