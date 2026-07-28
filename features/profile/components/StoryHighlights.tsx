"use client";

import Image from "next/image";
import { Plus } from "lucide-react";

interface Highlight {
  id: string;
  title: string;
  image: string;
  isActive?: boolean;
}

interface StoryHighlightsProps {
  highlights: Highlight[];
  showAddButton?: boolean;
  onAddHighlight?: () => void;
}

export default function StoryHighlights({
  highlights,
  showAddButton = true,
  onAddHighlight,
}: StoryHighlightsProps) {
  return (
    <section className="mt-6">
      <div className="flex gap-5 overflow-x-auto pb-2 scrollbar-hide">
        {highlights.map((highlight) => (
          <button
            key={highlight.id}
            className="flex min-w-18 flex-col items-center gap-2"
          >
            <div
              className={`rounded-full p-0.5 ${
                highlight.isActive
                  ? "bg-gradient-to-tr from-orange-500 via-pink-500 to-yellow-400"
                  : "bg-gray-300"
              }`}
            >
              <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-background">
                <Image
                  src={highlight.image}
                  alt={highlight.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <span className="max-w-[70px] truncate text-xs font-medium">
              {highlight.title}
            </span>
          </button>
        ))}

        {showAddButton && (
          <button
            onClick={onAddHighlight}
            className="flex min-w-18 flex-col items-center gap-2"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-dashed border-gray-300 transition hover:border-primary hover:bg-muted">
              <Plus size={22} />
            </div>

            <span className="text-xs font-medium">New</span>
          </button>
        )}
      </div>
    </section>
  );
}