"use client";

import {
  Grid3X3,
  Bookmark,
  UserSquare2,
  Pin,
} from "lucide-react";

export type ProfileTab =
  | "posts"
  | "pinned"
  | "saved"
  | "tagged";

interface ProfileTabsProps {
  activeTab: ProfileTab;
  onTabChange: (tab: ProfileTab) => void;
}

const tabs = [
  {
    id: "posts",
    icon: Grid3X3,
    label: "Posts",
  },
  {
    id: "pinned",
    icon: Pin,
    label: "Pinned",
  },
  {
    id: "saved",
    icon: Bookmark,
    label: "Saved",
  },
  {
    id: "tagged",
    icon: UserSquare2,
    label: "Tagged",
  },
] as const;

export default function ProfileTabs({
  activeTab,
  onTabChange,
}: ProfileTabsProps) {
  return (
    <div className="mt-6 border-b border-border">
      <div className="grid grid-cols-4">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center justify-center gap-1 border-b-2 py-3 transition-colors ${
                isActive
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon size={20} />

              <span className="hidden text-xs font-medium sm:block">
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}