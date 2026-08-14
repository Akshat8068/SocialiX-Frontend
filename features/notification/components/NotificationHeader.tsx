"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NotificationHeader() {
  const router = useRouter();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 border-b bg-background/80 backdrop-blur-md">
      <div className="relative mx-auto flex h-full w-full max-w-4xl items-center justify-center px-4 md:px-6 lg:px-8">
        
        {/* Mobile Back Button */}
        <button
          onClick={() => router.back()}
          className="absolute left-4 rounded-full p-2 transition hover:bg-muted active:scale-95 md:hidden"
          aria-label="Go back"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>

        {/* Center Title */}
        <h1 className="text-lg font-bold tracking-tight md:text-xl">
          Notifications
        </h1>
      </div>
    </header>
  );
}