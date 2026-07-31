"use client";

import { useEffect, useMemo, useState } from "react";
import { X } from "lucide-react";

import UserModelHeader from "../../../components/UserListModel/UserModelHeader";
import UserSearch from "../../../components/UserListModel/UserSearch"
import HashtagFooter from "./HashtagFooter";
import AddHashtagForm from "./AddHashtagForm";
import TrendingHashtags from "./TrendingHashtags";

interface HashtagModelProps {
    open: boolean;
    onClose: () => void;
    onDone: (hashtags: string[]) => void;
    trendingHashtags?: string[];
    initialHashtags?: string[];
}

export default function HashtagModel({
    open,
    onClose,
    onDone,
    trendingHashtags = [],
    initialHashtags = [],
}: HashtagModelProps) {
    const [search, setSearch] = useState("");
    const [selectedHashtags, setSelectedHashtags] =useState<string[]>(initialHashtags);

    useEffect(() => {
        setSelectedHashtags(initialHashtags);
    }, [initialHashtags]);

    useEffect(() => {
        if (!open) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [open, onClose]);

    const filteredTrending = useMemo(() => {
        if (!search.trim()) return trendingHashtags;

        return trendingHashtags.filter((tag) =>
            tag.toLowerCase().includes(search.toLowerCase())
        );
    }, [search, trendingHashtags]);

    const toggleHashtag = (tag: string) => {
        setSelectedHashtags((prev) =>
            prev.includes(tag)
                ? prev.filter((item) => item !== tag)
                : [...prev, tag]
        );
    };

    const addCustomHashtag = (tag: string) => {
        const formatted = tag.startsWith("#") ? tag : `#${tag}`;

        setSelectedHashtags((prev) => {
            if (prev.includes(formatted)) return prev;
            return [...prev, formatted];
        });
    };

    const handleDone = () => {
        onDone(selectedHashtags);
        onClose();
    };

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50">
            {/* Backdrop */}
            <div
                onClick={onClose}
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            />

            {/* Mobile Bottom Sheet / Desktop Dialog */}
            <div
                className="
                    absolute bottom-0 left-0 right-0
                    flex max-h-[90vh] flex-col
                    rounded-t-3xl
                    bg-white
                    shadow-2xl
                    dark:bg-zinc-900

                    md:left-1/2
                    md:top-1/2
                    md:bottom-auto
                    md:right-auto
                    md:w-full
                    md:max-w-xl
                    md:-translate-x-1/2
                    md:-translate-y-1/2
                    md:rounded-3xl
                "
            >
                {/* Grabber (Mobile Only) */}
                <div className="flex justify-center pt-3 md:hidden">
                    <div className="h-1.5 w-12 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                </div>

                {/* Desktop Close */}
                <button
                    onClick={onClose}
                    className="
                        absolute
                        right-5
                        top-5
                        hidden
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        transition
                        hover:bg-zinc-100
                        dark:hover:bg-zinc-800
                        md:flex
                    "
                >
                    <X size={20} />
                </button>

                {/* Header */}
                <UserModelHeader
                    title="Add Hashtags"
                    onClose={onClose}
                />

                {/* Body */}
                <div className="flex-1 space-y-6 overflow-y-auto px-5 py-5">
                    <UserSearch
                        value={search}
                        onChange={setSearch}
                        placeholder="Search hashtags"
                    />

                    <TrendingHashtags
                        hashtags={filteredTrending}
                        selected={selectedHashtags}
                        onToggle={toggleHashtag}
                    />

                    <AddHashtagForm
                        onAdd={addCustomHashtag}
                    />
                </div>

                {/* Footer */}
                <HashtagFooter
                    onCancel={onClose}
                    onDone={handleDone}
                />
            </div>
        </div>
    );
}