"use client";

import { X } from "lucide-react";

interface FollowModalHeaderProps {
    title: string;
    count: number;
    onClose: () => void;
}

export default function FollowModalHeader({
    title,
    count,
    onClose,
}: FollowModalHeaderProps) {
    return (
        <div className="sticky top-0 z-10 bg-white dark:bg-zinc-900">
            {/* Header */}
            <div className="flex items-center justify-between px-5 pb-4 md:pt-5">
                <div className="flex items-center gap-2 min-w-0">
                    <h2 className="truncate text-xl font-semibold text-zinc-900 dark:text-white">
                        {title}
                    </h2>

                    <span className="inline-flex items-center rounded-full bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 text-xs font-medium text-zinc-700 dark:text-zinc-300">
                        {count}
                    </span>
                </div>

                {/* Mobile Close */}
                <button
                    type="button"
                    onClick={onClose}
                    className="
            flex h-9 w-9 items-center justify-center rounded-full
            hover:bg-zinc-100
            active:scale-95
            transition
            md:hidden
            dark:hover:bg-zinc-800
          "
                    aria-label="Close"
                >
                    <X size={20} />
                </button>
            </div>

            {/* Divider */}
            <div className="h-px bg-zinc-200 dark:bg-zinc-800" />
        </div>
    );
}