"use client";

interface HashtagFooterProps {
    onDone: () => void;
    onCancel: () => void;
    doneLabel?: string;
    cancelLabel?: string;
    doneDisabled?: boolean;
    loading?: boolean;
}

export default function HashtagFooter({
    onDone,
    onCancel,
    doneLabel = "Done",
    cancelLabel = "Cancel",
    doneDisabled = false,
    loading = false,
}: HashtagFooterProps) {
    return (
        <div className="border-t border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-on-background">
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                {/* Cancel */}
                <button
                    type="button"
                    onClick={onCancel}
                    className="
                        h-11
                        rounded-xl
                        border
                        border-zinc-300
                        px-6
                        text-sm
                        font-medium
                        text-zinc-700
                        transition-all

                        hover:bg-zinc-100
                        active:scale-95

                        dark:border-zinc-700
                        dark:text-zinc-300
                        dark:hover:bg-zinc-800
                    "
                >
                    {cancelLabel}
                </button>

                {/* Done */}
                <button
                    type="button"
                    onClick={onDone}
                    disabled={doneDisabled || loading}
                    className="
                        h-11
                        rounded-xl
                        bg-orange-500
                        px-6
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
                    {loading ? "Saving..." : doneLabel}
                </button>
            </div>
        </div>
    );
}