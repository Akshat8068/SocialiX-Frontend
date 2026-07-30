"use client";

import { MessageCircle } from "lucide-react";
import { FollowUser } from "./UserListModel";

interface FollowActionsProps {
    user: FollowUser;

    onFollow?: (id: number) => void;
    onUnfollow?: (id: number) => void;
    onMessage?: (id: number) => void;
}

export default function UserActions({
    user,
    onFollow,
    onUnfollow,
    onMessage,
}: FollowActionsProps) {
    const isFollowing = user.isFollowing ?? false;

    return (
        <div className="flex items-center gap-2">
            {/* Message Button */}
            {isFollowing && (
                <button
                    type="button"
                    onClick={() => onMessage?.(user.id)}
                    aria-label={`Message ${user.fullName}`}
                    className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            border
            border-zinc-200
            bg-white
            text-zinc-700
            transition-all
            hover:bg-zinc-100
            active:scale-95

            dark:border-zinc-700
            dark:bg-zinc-900
            dark:text-zinc-300
            dark:hover:bg-zinc-800
          "
                >
                    <MessageCircle size={18} />
                </button>
            )}

            {/* Follow / Following Button */}
            {isFollowing ? (
                <button
                    type="button"
                    onClick={() => onUnfollow?.(user.id)}
                    className="
            h-10
            min-w-27.5
            rounded-xl
            border
            border-zinc-300
            bg-zinc-100
            px-4
            text-sm
            font-semibold
            text-zinc-900
            transition-all

            hover:bg-red-50
            hover:border-red-300
            hover:text-red-600

            active:scale-95

            dark:border-zinc-700
            dark:bg-zinc-800
            dark:text-white
            dark:hover:bg-red-500/10
            dark:hover:border-red-500
            dark:hover:text-red-400
          "
                >
                    Following
                </button>
            ) : (
                <button
                    type="button"
                    onClick={() => onFollow?.(user.id)}
                    className="
            h-10
            min-w-27.5
            rounded-xl
            bg-orange-500
            px-4
            text-sm
            font-semibold
            text-white
            transition-all

            hover:bg-orange-600
            active:scale-95

            disabled:cursor-not-allowed
            disabled:opacity-50
          "
                >
                    Follow
                </button>
            )}
        </div>
    );
}