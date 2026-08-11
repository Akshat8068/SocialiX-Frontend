"use client";

import {
    Heart,
    MessageCircle,
    Send,
    Bookmark,
} from "lucide-react";

interface PostActionsProps {
    likes: number;
    comments: number;
    shares: number;
    isLiked?: boolean;
    isSaved?: boolean;
    onLike?: () => void;
    onLikesClick?: () => void;
    onSave?: () => void;
}

export default function PostActions({
    likes,
    comments,
    onLike,
    shares,
    onLikesClick,
    isLiked = false,
    isSaved = false,onSave
}: PostActionsProps) {
    return (
        <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                    <button
                        type="button"
                        onClick={onLike}
                        className="transition-transform active:scale-95"
                    >
                        <Heart
                            size={22}
                            className={
                                isLiked
                                    ? "fill-red-500 text-red-500"
                                    : "text-foreground hover:text-primary"
                            }
                        />
                    </button>

                    <button
                        type="button"
                        onClick={onLikesClick}
                        className="text-sm font-medium hover:underline"
                    >
                        {likes}
                    </button>
                </div>

                <button className="flex items-center gap-2 transition-transform active:scale-95">
                    <MessageCircle
                        size={22}
                        className="text-muted-foreground hover:text-foreground"
                    />
                    <span className="text-sm">{comments}</span>
                </button>

                <button className="flex items-center gap-2 transition-transform active:scale-95">
                    <Send
                        size={22}
                        className="text-muted-foreground hover:text-foreground"
                    />
                    <span className="text-sm">{shares}</span>
                </button>
            </div>

            <button className="transition-transform active:scale-95">
                <Bookmark
                    size={22}  onClick={onSave}
                    className={
                        isSaved
                            ? "fill-primary text-primary"
                            : "text-muted-foreground hover:text-foreground"
                    }
                />
            </button>
        </div>
    );
}