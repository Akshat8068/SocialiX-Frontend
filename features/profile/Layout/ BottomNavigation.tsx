"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  House,
  Search,
  SquarePlus,
  Clapperboard,
  User,
} from "lucide-react";

const navItems = [
  {
    label: "Home",
    href: "/",
    icon: House,
  },
  {
    label: "Search",
    href: "/search",
    icon: Search,
  },
  {
    label: "Post",
    href: "/post/create",
    icon: SquarePlus,
  },
  {
    label: "Reels",
    href: "/reels",
    icon: Clapperboard,
  },
  {
    label: "Profile",
    href: "/profile",
    icon: User,
  },
];

export default function BottomNavigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 z-50 flex w-full items-center justify-around border-t bg-background/95 px-2 py-2 backdrop-blur-lg lg:hidden">
      {navItems.map((item) => {
        const Icon = item.icon;

        const isActive =
          item.href === "/"
            ? pathname === "/"
            : pathname.startsWith(item.href);

        return (
          <Link
            key={item.label}
            href={item.href}
            className={`flex flex-col items-center justify-center rounded-xl px-3 py-1 transition-all ${
              isActive
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {item.label === "Post" ? (
              <SquarePlus
                size={30}
                strokeWidth={2.2}
              />
            ) : (
              <Icon
                size={24}
                strokeWidth={isActive ? 2.5 : 2}
              />
            )}

            <span className="mt-1 text-[10px] font-medium">
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}