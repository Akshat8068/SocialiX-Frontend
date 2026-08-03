"use client";

import FeedPost from "@/features/post/components/FeedPost";
import { Post } from "@/types/post";

interface ProfileFeedViewProps {
  posts: Post[]
}

export default function ProfileFeedView({
  posts,
}: ProfileFeedViewProps) {
     if (posts.length === 0) {
        return (
            <div className="py-20 text-center">
                <h1 className="text-xl font-semibold">No Posts</h1>
            </div>
        );
    }
    return (
        <div className="mx-auto mt-6 max-w-200 space-y-8">
            {posts.map((post) => (
                <FeedPost
                    key={post.id}
                    post={post}
                />
            ))}
        </div>
    );
}