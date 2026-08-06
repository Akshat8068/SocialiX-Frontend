"use client";

import { Loader2 } from "lucide-react";
import { Hashtag } from "@/types/hashTag";
import HashtagChip from "./HashtagChip";

interface TrendingHashtagsProps {
    hashtags: Hashtag[];
    selected: string[];
    onToggle: (tag: string) => void;
    loading?: boolean;
}

export default function TrendingHashtags({
    hashtags,
    selected,
    onToggle,
    loading = false,
}: TrendingHashtagsProps) {
    if (loading) {
        return (
            <div className="flex items-center justify-center py-8">
                <Loader2 size={20} className="animate-spin text-zinc-400" />
            </div>
        );
    }

    if (hashtags.length === 0) {
        return (
            <div className="rounded-xl border border-dashed border-zinc-300 py-8 text-center text-sm text-zinc-500 dark:border-zinc-700 dark:text-zinc-400">
                No hashtags found.
            </div>
        );
    }

    return (
        <div className="flex flex-wrap gap-2">
            {hashtags.map((tag) => (
                <HashtagChip
                    key={tag.id}
                    hashtag={tag.name}
                    selected={selected.includes(`#${tag.name}`)}
                    onClick={() => onToggle(`#${tag.name}`)}
                />
            ))}
        </div>
    );
}
