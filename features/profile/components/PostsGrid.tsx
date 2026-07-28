"use client";

import Image from "next/image";
import { Copy, Play } from "lucide-react";

export interface Post {
  id: string;
  image: string;
  type?: "image" | "carousel" | "reel";
}

interface PostsGridProps {
  posts: Post[];
  onPostClick?: (post: Post) => void;
}

export default function PostsGrid({
  posts,
  onPostClick,
}: PostsGridProps) {
  if (!posts.length) {
    return (
      <div className="flex h-72 items-center justify-center">
        <p className="text-sm text-muted-foreground">
          No posts available.
        </p>
      </div>
    );
  }

  return (
    <section className="mt-1">
      <div className="grid grid-cols-3 gap-1 md:gap-2">
        {posts.map((post) => (
          <button
            key={post.id}
            onClick={() => onPostClick?.(post)}
            className="group relative aspect-square overflow-hidden bg-muted"
          >
            <Image
              src={post.image}
              alt="Post"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />

            {(post.type === "carousel" || post.type === "reel") && (
              <div className="absolute right-2 top-2 rounded-full bg-black/40 p-1 text-white">
                {post.type === "carousel" ? (
                  <Copy size={16} />
                ) : (
                  <Play size={16} fill="currentColor" />
                )}
              </div>
            )}
          </button>
        ))}
      </div>
    </section>
  );
}