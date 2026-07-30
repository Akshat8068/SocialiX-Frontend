"use client";

import HashtagChip from "./HashtagChip";

interface TrendingHashtagsProps {
    hashtags: string[];
    selected: string[];
    onToggle: (tag: string) => void;
}

export default function TrendingHashtags({
    hashtags,
    selected,
    onToggle,
}: TrendingHashtagsProps) {
    if (hashtags.length === 0) {
        return (
            <div className="space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    Trending Hashtags
                </h3>

                <div className="rounded-xl border border-dashed border-zinc-300 py-8 text-center text-sm text-zinc-500 dark:border-zinc-700 dark:text-zinc-400">
                    No hashtags found.
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Trending Hashtags
            </h3>

            <div className="flex flex-wrap gap-2">
                {hashtags.map((tag) => (
                    <HashtagChip
                        key={tag}
                        hashtag={tag}
                        selected={selected.includes(tag)}
                        onClick={() => onToggle(tag)}
                    />
                ))}
            </div>
        </div>
    );
}