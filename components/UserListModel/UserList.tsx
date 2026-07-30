"use client";

import UserCard from "./UserCard";
import {FollowUser, UserListType } from "./UserListModel";

interface FollowListProps {
    type: UserListType;
    users: FollowUser[];
    loading?: boolean;

    onFollow?: (id: number) => void;
    onUnfollow?: (id: number) => void;

    onAccept?: (id: number) => void;
    onReject?: (id: number) => void;

    onMessage?: (id: number) => void;
}

export default function UserList({
    type,
    users,
    loading = false,

    onFollow,
    onUnfollow,

    onAccept,
    onReject,

    onMessage,
}: FollowListProps) {
    if (loading) {
        return (
            <div className="space-y-1 px-5 py-2">
                {Array.from({ length: 8 }).map((_, index) => (
                    <SkeletonCard key={index} />
                ))}
            </div>
        );
    }

    if (!users.length) {
        return (
            <div className="flex h-72 flex-col items-center justify-center px-6 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800">
                    <svg
                        className="h-8 w-8 text-zinc-500"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.8}
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 20a4 4 0 0 0-8 0m8 0H7m10 0h2M7 20H5m7-8a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                        />
                    </svg>
                </div>

                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                    No users found
                </h3>

                <p className="mt-1 text-sm text-zinc-500">
                    Try searching with a different username.
                </p>
            </div>
        );
    }

    return (
        <div className="divide-y divide-zinc-100 dark:divide-zinc-800">
            {users.map((user) => (
                <UserCard
                    key={user.id}
                    type={type}
                    user={user}
                    onFollow={onFollow}
                    onUnfollow={onUnfollow}
                    onAccept={onAccept}
                    onReject={onReject}
                    onMessage={onMessage}
                />
            ))}
        </div>
    );
}

function SkeletonCard() {
    return (
        <div className="flex animate-pulse items-center gap-3 py-3">
            <div className="h-12 w-12 rounded-full bg-zinc-200 dark:bg-zinc-800" />

            <div className="flex-1 space-y-2">
                <div className="h-4 w-32 rounded bg-zinc-200 dark:bg-zinc-800" />

                <div className="h-3 w-20 rounded bg-zinc-200 dark:bg-zinc-800" />
            </div>

            <div className="h-10 w-24 rounded-xl bg-zinc-200 dark:bg-zinc-800" />
        </div>
    );
}