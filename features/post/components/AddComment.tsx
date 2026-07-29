"use client";

import { useState } from "react";
import Image from "next/image";

interface AddCommentProps {
    profilePicture?: string;
    onSubmit?: (comment: string) => void;
}

export default function AddComment({
    profilePicture = "/Hero.jpg",
    onSubmit,
}: AddCommentProps) {
    const [comment, setComment] = useState("");

    const handleSubmit = () => {
        const value = comment.trim();

        if (!value) return;

        onSubmit?.(value);
        setComment("");
    };

    return (
        <div className="flex items-center gap-3 border-t px-4 py-3">
            <Image
                src={profilePicture}
                alt="Your profile"
                width={32}
                height={32}
                className="rounded-full object-cover"
            />

            <input
                type="text"
                placeholder="Add a comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />

            <button
                onClick={handleSubmit}
                disabled={!comment.trim()}
                className="text-sm font-semibold text-primary disabled:cursor-not-allowed disabled:opacity-50"
            >
                Post
            </button>
        </div>
    );
}