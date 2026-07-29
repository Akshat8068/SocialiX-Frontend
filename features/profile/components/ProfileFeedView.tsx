"use client";

import FeedPost from "@/features/post/components/FeedPost";
import { dummyPosts } from "@/features/post/data";


export default function ProfileFeedView() {
    return (
        <div className="mx-auto mt-6 max-w-200 space-y-8">
            {dummyPosts.map((post) => (
                <FeedPost
                    key={post.id}
                    post={post}
                />
            ))}
        </div>
    );
}