"use client";

import Image from "next/image";
import { BadgeCheckIcon } from "lucide-react";
import {  FollowUser, UserListType } from "./UserListModel";
import UserRequestActions from "./UserRequestActions";
import UserActions from "./UserActions";

interface FollowUserCardProps {
    type: UserListType;
    user: FollowUser;

    onFollow?: (id: number) => void;
    onUnfollow?: (id: number) => void;

    onAccept?: (id: number) => void;
    onReject?: (id: number) => void;

    onMessage?: (id: number) => void;
}

export default function UserCard({
    type,
    user,
    onFollow,
    onUnfollow,
    onAccept,
    onReject,
    onMessage,
}: FollowUserCardProps) {
    return (
        <div
            className="
        flex
        items-center
        gap-3
        px-5
        py-3
        transition-colors
        hover:bg-zinc-50
        dark:hover:bg-zinc-800/40
      "
        >
            {/* Avatar */}
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
                <Image
                    src={user.profilePicture || "/images/default-avatar.png"}
                    alt={user.fullName}
                    fill
                    sizes="48px"
                    className="object-cover"
                />
            </div>

            {/* User Info */}
            <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1">
                    <p className="truncate text-sm font-semibold text-zinc-900 dark:text-white">
                        {user.fullName}
                    </p>

                    {user.isVerified && (
                        <BadgeCheckIcon className="h-4 w-4 shrink-0 text-sky-500" />
                    )}
                </div>

                <p className="truncate text-sm text-zinc-500">
                    @{user.username}
                </p>

                {user.followsYou && (
                    <p className="mt-0.5 text-xs text-zinc-400">
                        Follows you
                    </p>
                )}
            </div>

            {/* Actions */}
            <div className="ml-2 flex shrink-0 items-center">
                {type === "requests" ? (
                    <UserRequestActions
                        userId={user.id}
                        onAccept={onAccept}
                        onReject={onReject}
                    />
                ) : (
                    <UserActions
                        user={user}
                        onFollow={onFollow}
                        onUnfollow={onUnfollow}
                        onMessage={onMessage}
                    />
                )}
            </div>
        </div>
    );
}