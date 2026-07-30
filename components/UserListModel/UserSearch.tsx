"use client";

import { Search, X } from "lucide-react";

interface FollowSearchProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

export default function UserSearch({
    value,
    onChange,
    placeholder = "Search",
}: FollowSearchProps) {
    return (
        <div className="relative">
            {/* Search Icon */}
            <Search
                size={18}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
            />

            {/* Input */}
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                autoComplete="off"
                spellCheck={false}
                className="
          h-11
          w-full
          rounded-xl
          border
          border-transparent
          bg-zinc-100
          pl-11
          pr-10
          text-sm
          text-zinc-900
          placeholder:text-zinc-500
          outline-none
          transition-all

          focus:border-orange-400
          focus:bg-white
          focus:ring-4
          focus:ring-orange-400/20

          dark:bg-zinc-800
          dark:text-white
          dark:placeholder:text-zinc-400
          dark:focus:border-orange-500
          dark:focus:bg-zinc-900
        "
            />

            {/* Clear Button */}
            {value.length > 0 && (
                <button
                    type="button"
                    onClick={() => onChange("")}
                    aria-label="Clear search"
                    className="
            absolute
            right-3
            top-1/2
            flex
            h-7
            w-7
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            text-zinc-500
            transition
            hover:bg-zinc-200
            active:scale-95
            dark:hover:bg-zinc-700
          "
                >
                    <X size={16} />
                </button>
            )}
        </div>
    );
}