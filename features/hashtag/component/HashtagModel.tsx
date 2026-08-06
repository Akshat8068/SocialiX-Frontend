"use client";

import { useEffect, useMemo, useState } from "react";
import { X } from "lucide-react";

import UserModelHeader from "../../../components/UserListModel/UserModelHeader";
import UserSearch from "../../../components/UserListModel/UserSearch";
import HashtagFooter from "./HashtagFooter";
import AddHashtagForm from "./AddHashtagForm";
import TrendingHashtags from "./TrendingHashtags";
import { useCreateHashtagMutation, useGetAllHashtagsQuery } from "../api/hashtag.api";
import { toast } from "react-toastify";

interface HashtagModelProps {
    open: boolean;
    onClose: () => void;
    onDone: (hashtags: string[]) => void;
    initialHashtags?: string[];
}

export default function HashtagModel({
    open,
    onClose,
    onDone,
    initialHashtags = [],
}: HashtagModelProps) {
    const [search, setSearch] = useState("");
    const [selectedHashtags, setSelectedHashtags] = useState<string[]>(initialHashtags);

    // Fetch all public hashtags from the backend
    const { data, isLoading } = useGetAllHashtagsQuery(undefined, {
        skip: !open,
    });

    const [createHashtag, { isLoading: isCreating }] = useCreateHashtagMutation();

    const allHashtags = data?.data ?? [];

    // Sync selection when parent re-opens modal with existing tags
    useEffect(() => {
        setSelectedHashtags(initialHashtags);
    }, [initialHashtags]);

    // Lock body scroll while open, handle Escape key
    useEffect(() => {
        if (!open) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [open, onClose]);

    // Filter the DB list by whatever the user typed in the search box
    const filteredHashtags = useMemo(() => {
        if (!search.trim()) return allHashtags;
        return allHashtags.filter((tag) =>
            tag.name.toLowerCase().includes(search.toLowerCase().replace(/^#/, ""))
        );
    }, [search, allHashtags]);

    const toggleHashtag = (tag: string) => {
        setSelectedHashtags((prev) =>
            prev.includes(tag)
                ? prev.filter((item) => item !== tag)
                : [...prev, tag]
        );
    };

    const addCustomHashtag = async (tag: string) => {
        const name = tag.replace(/^#/, "").trim().toLowerCase();
        if (!name) return;

        try {
            await createHashtag({ name }).unwrap();
            // After successful creation the RTK Query cache is invalidated
            // and getAllHashtags refetches automatically — the new tag will
            // appear in the list. Also select it straight away.
            const formatted = `#${name}`;
            setSelectedHashtags((prev) =>
                prev.includes(formatted) ? prev : [...prev, formatted]
            );
        } catch (err: any) {
            const message = err?.data?.message ?? "Failed to create hashtag";
            toast.error(message);
        }
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

            {/* ── Mobile: bottom sheet ── */}
            <div className="
                md:hidden
                absolute bottom-0 left-0 right-0
                flex max-h-[90vh] flex-col
                rounded-t-3xl bg-white shadow-2xl
                dark:bg-zinc-900
            ">
                {/* Grabber */}
                <div className="flex justify-center pt-3">
                    <div className="h-1.5 w-12 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                </div>

                <UserModelHeader title="Add Hashtags" onClose={onClose} />

                <div className="flex-1 space-y-5 overflow-y-auto px-5 py-5">
                    <UserSearch value={search} onChange={setSearch} placeholder="Search hashtags..." />
                    {selectedHashtags.length > 0 && (
                        <div className="space-y-2">
                            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                                Selected ({selectedHashtags.length})
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {selectedHashtags.map((tag) => (
                                    <span key={tag} className="inline-flex items-center gap-1.5 rounded-full bg-orange-500 px-3 py-1.5 text-xs font-medium text-white">
                                        {tag}
                                        <button type="button" onClick={() => toggleHashtag(tag)} className="rounded-full p-0.5 hover:bg-white/20 transition-colors" aria-label={`Remove ${tag}`}>
                                            <X size={10} />
                                        </button>
                                    </span>
                                ))}
                            </div>
                            <div className="h-px bg-zinc-200 dark:bg-zinc-800" />
                        </div>
                    )}
                    <TrendingHashtags hashtags={filteredHashtags} selected={selectedHashtags} onToggle={toggleHashtag} loading={isLoading} />
                    <div className="h-px bg-zinc-200 dark:bg-zinc-800" />
                    <AddHashtagForm onAdd={addCustomHashtag} isLoading={isCreating} />
                </div>

                <HashtagFooter onCancel={onClose} onDone={handleDone} />
            </div>

            {/* ── Desktop: centered dialog ── */}
            <div className="
                hidden md:flex
                fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                w-120 max-h-[85vh] flex-col
                rounded-2xl bg-white shadow-2xl
                dark:bg-zinc-900
            ">
                {/* Header row */}
                <div className="flex items-center justify-between px-6 pt-6 pb-4">
                    <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">Add Hashtags</h2>
                    <button
                        onClick={onClose}
                        className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                        aria-label="Close"
                    >
                        <X size={18} />
                    </button>
                </div>

                <div className="h-px bg-zinc-200 dark:bg-zinc-800" />

                {/* Body */}
                <div className="flex-1 space-y-5 overflow-y-auto px-6 py-5">
                    <UserSearch value={search} onChange={setSearch} placeholder="Search hashtags..." />
                    {selectedHashtags.length > 0 && (
                        <div className="space-y-2">
                            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                                Selected ({selectedHashtags.length})
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {selectedHashtags.map((tag) => (
                                    <span key={tag} className="inline-flex items-center gap-1.5 rounded-full bg-orange-500 px-3 py-1.5 text-xs font-medium text-white">
                                        {tag}
                                        <button type="button" onClick={() => toggleHashtag(tag)} className="rounded-full p-0.5 hover:bg-white/20 transition-colors" aria-label={`Remove ${tag}`}>
                                            <X size={10} />
                                        </button>
                                    </span>
                                ))}
                            </div>
                            <div className="h-px bg-zinc-200 dark:bg-zinc-800" />
                        </div>
                    )}
                    <TrendingHashtags hashtags={filteredHashtags} selected={selectedHashtags} onToggle={toggleHashtag} loading={isLoading} />
                    <div className="h-px bg-zinc-200 dark:bg-zinc-800" />
                    <AddHashtagForm onAdd={addCustomHashtag} isLoading={isCreating} />
                </div>

                {/* Footer */}
                <div className="h-px bg-zinc-200 dark:bg-zinc-800" />
                <div className="flex items-center gap-3 px-6 py-4">
                    <button
                        type="button"
                        onClick={handleDone}
                        className="flex-1 h-11 rounded-xl bg-orange-500 text-sm font-semibold text-white hover:bg-orange-600 active:scale-95 transition-all"
                    >
                        Done
                    </button>
                    <button
                        type="button"
                        onClick={onClose}
                        className="flex-1 h-11 rounded-xl border border-zinc-300 text-sm font-medium text-zinc-700 hover:bg-zinc-50 active:scale-95 transition-all dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}
