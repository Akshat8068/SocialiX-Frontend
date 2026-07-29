import { Mail, Bell, Search } from "lucide-react";
import { profile } from "@/data/profileData";

const DesktopNavbar = () => {
    return (
        <header className="sticky top-0 z-40 hidden h-16 border-b border-border bg-background/80 backdrop-blur-xl lg:flex">
            <div className="flex w-full items-center justify-between px-8">
                {/* Search */}
                <div className="flex-1">
                    <div className="relative max-w-md">
                        <Search
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                        />

                        <input
                            type="text"
                            placeholder="Search creatives, projects..."
                            className="h-10 w-full rounded-full border border-border bg-muted pl-11 pr-4 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                        />
                    </div>
                </div>

                {/* Right Side */}
                <div className="ml-8 flex items-center gap-6">
                    {/* Actions */}
                    <div className="flex items-center gap-2">
                        <button
                            className="rounded-full p-2 transition hover:bg-muted"
                            aria-label="Messages"
                        >
                            <Mail size={20} />
                        </button>

                        <button
                            className="relative rounded-full p-2 transition hover:bg-muted"
                            aria-label="Notifications"
                        >
                            <Bell size={20} />

                            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-primary"></span>
                        </button>
                    </div>

                    {/* Divider */}
                    <div className="h-8 w-px bg-border"></div>

                    {/* User */}
                    <div className="flex items-center gap-3">
                        <span className="font-medium text-primary">
                            @{profile.username}
                        </span>

                        <img
                            src={profile.avatar}
                            alt={profile.name}
                            className="h-9 w-9 rounded-full border object-cover"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default DesktopNavbar;