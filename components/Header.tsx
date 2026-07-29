"use client";
import {Bell,Search,Settings} from "lucide-react";

export default function Header() {
  return (
    <>
      <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-outline-variant/30 bg-surface/80 px-4 backdrop-blur-xl md:hidden">

        <h1 className="text-xl font-bold tracking-tight text-primary">
          SocialiX
        </h1>

        <div className="flex items-center gap-3">

          <button className="rounded-full p-2 transition hover:bg-surface-container-low">
            <Bell size={22} />
          </button>

          <button className="rounded-full p-2 transition hover:bg-surface-container-low">
            <Settings size={22} />
          </button>

        </div>
      </header>

      <header className="sticky top-0 z-40 hidden h-16 items-center justify-between border-b border-outline-variant bg-surface/80 px-6 backdrop-blur-xl md:flex">


        <div className="relative w-full max-w-md">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant"
          />

          <input
            type="text"
            placeholder="Search..."
            className="h-10 w-full rounded-full bg-surface-container-low pl-11 pr-4 outline-none transition focus:ring-2 focus:ring-primary/20"
          />

        </div>


        <div className="flex items-center gap-5">

          <button className="rounded-full p-2 transition hover:bg-surface-container-low">
            <Settings size={22} />
          </button>

          <button className="relative rounded-full p-2 transition hover:bg-surface-container-low">

            <Bell size={22} />

            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-primary" />

          </button>


        </div>

      </header>
    </>
  );
}