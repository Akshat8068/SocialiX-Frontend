"use client";

import { Bell, Menu, Settings } from "lucide-react";
import Link from "next/link";

interface MobileTopbarProps {
  title?: string;
  showMenu?: boolean;
  showNotification?: boolean;
  showSettings?: boolean;
  onMenuClick?: () => void;
  onNotificationClick?: () => void;
  onSettingsClick?: () => void;
}

export default function MobileTopbar({
  title = "SocialiX",
  showMenu = false,
  showNotification = true,
  showSettings = true,
  onMenuClick,
  onNotificationClick,
  onSettingsClick,
}: MobileTopbarProps) {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur-lg lg:hidden">
      <div className="flex h-16 items-center justify-between px-4">
        {/* Left */}
        <div className="flex items-center gap-3">
          {showMenu && (
            <button
              onClick={onMenuClick}
              className="rounded-lg p-2 transition hover:bg-muted"
            >
              <Menu size={22} />
            </button>
          )}

          <Link href="/">
            <h1 className="text-2xl font-bold text-primary">
              {title}
            </h1>
          </Link>
        </div>

        {/* Right */}
        <div className="flex items-center gap-2">
          {showNotification && (
            <button
              onClick={onNotificationClick}
              className="rounded-lg p-2 transition hover:bg-muted"
            >
              <Bell size={22} />
            </button>
          )}

          {showSettings && (
            <button
              onClick={onSettingsClick}
              className="rounded-lg p-2 transition hover:bg-muted"
            >
              <Settings size={22} />
            </button>
          )}
        </div>
      </div>
    </header>
  );
}