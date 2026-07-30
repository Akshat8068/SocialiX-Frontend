"use client";

import clsx from "clsx";

interface HashtagChipProps {
    hashtag: string;
    selected?: boolean;
    onClick: () => void;
    disabled?: boolean;
}

export default function HashtagChip({
    hashtag,
    selected = false,
    onClick,
    disabled = false,
}: HashtagChipProps) {
    const formattedHashtag = hashtag.startsWith("#")
        ? hashtag
        : `#${hashtag}`;

    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            className={clsx(
                "rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200",
                "active:scale-95",
                selected
                    ? "border-orange-500 bg-orange-500 text-white shadow-sm"
                    : "border-zinc-300 bg-zinc-100 text-zinc-700 hover:border-orange-400 hover:bg-orange-50 hover:text-orange-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:border-orange-500 dark:hover:bg-zinc-700 dark:hover:text-orange-400",
                disabled &&
                "cursor-not-allowed opacity-50 hover:border-zinc-300 hover:bg-zinc-100 hover:text-zinc-700 dark:hover:border-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-300"
            )}
        >
            {formattedHashtag}
        </button>
    );
}