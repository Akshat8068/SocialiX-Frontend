"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Compass,
  Clapperboard,
  MessageCircle,
  Bell,
  BarChart3,
  Plus,
  Search,
  User,
} from "lucide-react";
import clsx from "clsx";

const sidebarItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "Explore", href: "/explore", icon: Compass },
  { label: "Reels", href: "/reels", icon: Clapperboard },
  { label: "Messages", href: "/messages", icon: MessageCircle },
  { label: "Notifications", href: "/notifications", icon: Bell },
  { label: "Analytics", href: "/analytics", icon: BarChart3 },
];

const bottomItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "Search", href: "/explore", icon: Search },
  { label: "Post", href: "/create", icon: Plus },
  { label: "Reels", href: "/reels", icon: Clapperboard },
  { label: "Profile", href: "/profile", icon: User },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <>
      {/* Sidebar */}
      <aside className="hidden md:flex fixed left-0 top-0 z-50 h-screen w-20 lg:w-64 flex-col border-r border-outline-variant bg-surface">

        <div className="px-4 py-6 ">
          <h1 className="md:hidden lg:block text-xl  font-bold tracking-tight text-primary">
          SocialiX
        </h1>

          <div className="flex justify-center lg:hidden">
            <span className="text-3xl font-bold">S</span>
          </div>
        </div>

        <div className="flex-1 space-y-2 px-3">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;

            return (
              <Link
                key={item.label}
                href={item.href}
                className={clsx(
                  "flex items-center justify-center gap-4 rounded-xl px-4 py-3 transition lg:justify-start",
                  active
                    ? "bg-primary text-white"
                    : "hover:bg-surface-container-low"
                )}
              >
                <Icon size={22} />

                <span className="hidden lg:block">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>

        <div className="px-4">
          <button className="hidden w-full rounded-xl bg-primary py-3 font-semibold text-white lg:block">
            Create Post
          </button>

          <button className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white lg:hidden">
            <Plus />
          </button>
        </div>

        <div className="mt-6 flex items-center justify-center gap-3 border-t border-outline-variant p-4 lg:justify-start">
          <img
            src="https://i.pravatar.cc/100"
            alt="Profile"
            className="h-10 w-10 rounded-full"
          />

          <div className="hidden lg:block">
            <p className="font-semibold">Alex Rivera</p>
            <p className="text-xs text-on-surface-variant">
              Admin Access
            </p>
          </div>
        </div>
      </aside>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 z-50 flex h-16 w-full items-center justify-around border-t border-outline-variant bg-surface md:hidden">
        {bottomItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={item.label}
              href={item.href}
              className={clsx(
                "flex flex-col items-center justify-center",
                active ? "text-primary" : "text-on-surface-variant"
              )}
            >
              <Icon size={24} />
              <span className="mt-1 text-[10px]">
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}