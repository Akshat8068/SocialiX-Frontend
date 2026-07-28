"use client";

import Link from "next/link";
import {
  User,
  Settings,
  Users,
  UserPlus,
  VolumeX,
  Ban,
} from "lucide-react";

const menuItems = [
  {
    label: "Profile",
    href: "/profile",
    icon: User,
    active: true,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
  },
  {
    label: "Followers",
    href: "/followers",
    icon: Users,
  },
  {
    label: "Following",
    href: "/following",
    icon: UserPlus,
  },
  {
    label: "Muted",
    href: "/muted",
    icon: VolumeX,
  },
  {
    label: "Blocked",
    href: "/blocked",
    icon: Ban,
  },
];

export default function DesktopSidebar() {
  return (
    <aside className="sticky top-0 hidden h-screen w-64 flex-col border-r bg-background lg:flex">
      {/* Logo */}
      <div className="border-b px-6 py-6">
        <h1 className="text-2xl font-bold text-primary">
          SocialiX
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex flex-1 flex-col gap-2 p-4">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-colors ${
                item.active
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted"
              }`}
            >
              <Icon size={20} />

              <span className="font-medium">
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* Pro Card */}
      <div className="m-4 rounded-2xl border bg-muted p-5">
        <h3 className="font-semibold text-primary">
          SocialiX Pro
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          Unlock premium features and grow your audience faster.
        </p>

        <button className="mt-5 w-full rounded-xl bg-primary py-2.5 font-medium text-primary-foreground transition hover:opacity-90">
          Upgrade to Pro
        </button>
      </div>
    </aside>
  );
}