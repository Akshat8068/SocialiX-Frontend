"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

interface AddHashtagFormProps {
    onAdd: (hashtag: string) => void;
}

export default function AddHashtagForm({
    onAdd,
}: AddHashtagFormProps) {
    const [hashtag, setHashtag] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const value = hashtag.trim().replace(/^#/, "");

        if (!value) return;

        onAdd(`#${value}`);
        setHashtag("");
    };

    return (
        <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Create Custom
            </h3>

            <form
                onSubmit={handleSubmit}
                className="flex items-center gap-3"
            >
                <div className="relative flex-1">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 font-semibold text-zinc-500 dark:text-zinc-400">
                        #
                    </span>

                    <input
                        type="text"
                        value={hashtag}
                        onChange={(e) => setHashtag(e.target.value)}
                        placeholder="Enter hashtag..."
                        autoComplete="off"
                        spellCheck={false}
                        className="
                            h-11
                            w-full
                            rounded-xl
                            border
                            border-zinc-300
                            bg-white
                            pl-8
                            pr-4
                            text-sm
                            outline-none
                            transition-all

                            focus:border-orange-500
                            focus:ring-4
                            focus:ring-orange-500/20

                            dark:border-zinc-700
                            dark:bg-zinc-900
                            dark:text-white
                            dark:placeholder:text-zinc-500
                        "
                    />
                </div>

                <button
                    type="submit"
                    disabled={!hashtag.trim()}
                    className="
                        inline-flex
                        h-11
                        items-center
                        gap-2
                        rounded-xl
                        bg-orange-500
                        px-5
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
                    <Plus size={16} />
                    Add
                </button>
            </form>
        </div>
    );
}