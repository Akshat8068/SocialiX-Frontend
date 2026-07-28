"use client";

import { Edit, LayoutDashboard, Share2 } from "lucide-react";

interface ProfileActionsProps {
  isOwnProfile?: boolean;
  isProfessional?: boolean;
  onEdit?: () => void;
  onShare?: () => void;
  onDashboard?: () => void;
}

export default function ProfileActions({
  isOwnProfile = true,
  isProfessional = false,
  onEdit,
  onShare,
  onDashboard,
}: ProfileActionsProps) {
  if (!isOwnProfile) return null;

  return (
    <div className="grid grid-cols-2 gap-3">
      <button
        onClick={onEdit}
        className="flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90 active:scale-95"
      >
        <Edit size={18} />
        <span>Edit Profile</span>
      </button>

      <button
        onClick={onShare}
        className="flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-4 py-3 text-sm font-medium transition hover:bg-muted active:scale-95"
      >
        <Share2 size={18} />
        <span>Share Profile</span>
      </button>

      {isProfessional && (
        <button
          onClick={onDashboard}
          className="col-span-2 flex items-center justify-center gap-2 rounded-xl bg-secondary px-4 py-3 text-sm font-medium text-secondary-foreground transition hover:opacity-90 active:scale-95"
        >
          <LayoutDashboard size={18} />
          <span>Professional Dashboard</span>
        </button>
      )}
    </div>
  );
}
