"use client";

import Image from "next/image";

interface SuggestedUser {
  id: string;
  name: string;
  username: string;
  avatar: string;
}

interface Trend {
  id: string;
  category: string;
  title: string;
  posts: string;
}

interface RightSidebarProps {
  suggestedUsers: SuggestedUser[];
  trends: Trend[];
}

export default function RightSidebar({
  suggestedUsers,
  trends,
}: RightSidebarProps) {
  return (
    <aside className="sticky top-0 hidden h-screen w-80 overflow-y-auto p-4 xl:block">
      {/* Suggested Users */}
      <section className="rounded-2xl border bg-card p-5">
        <h2 className="mb-5 text-lg font-semibold">
          You might like
        </h2>

        <div className="space-y-5">
          {suggestedUsers.map((user) => (
            <div
              key={user.id}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="relative h-11 w-11 overflow-hidden rounded-full">
                  <Image
                    src={user.avatar}
                    alt={user.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <p className="font-medium">{user.name}</p>

                  <p className="text-sm text-muted-foreground">
                    @{user.username}
                  </p>
                </div>
              </div>

              <button className="rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground hover:opacity-90">
                Follow
              </button>
            </div>
          ))}
        </div>

        <button className="mt-6 text-sm font-medium text-primary">
          Show more
        </button>
      </section>

      {/* Trends */}
      <section className="mt-6 rounded-2xl border bg-card p-5">
        <h2 className="mb-5 text-lg font-semibold">
          Trends for you
        </h2>

        <div className="space-y-5">
          {trends.map((trend) => (
            <button
              key={trend.id}
              className="block w-full text-left"
            >
              <p className="text-xs text-muted-foreground">
                {trend.category}
              </p>

              <p className="mt-1 font-semibold">
                {trend.title}
              </p>

              <p className="mt-1 text-xs text-muted-foreground">
                {trend.posts}
              </p>
            </button>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground">
        <button>Terms</button>
        <button>Privacy</button>
        <button>Cookies</button>
        <button>Accessibility</button>
        <button>Ads Info</button>

        <span className="w-full">
          © 2026 SocialiX
        </span>
      </footer>
    </aside>
  );
}