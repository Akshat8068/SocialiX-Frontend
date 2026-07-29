import { Bell, Settings } from "lucide-react";

const MobileHeader = () => {
    return (
        <header className="sticky top-0 z-50 h-16 border-b border-border bg-background/80 backdrop-blur-xl md:hidden">
            <div className="mx-auto flex h-full max-w-md items-center justify-between px-4">
                {/* Logo */}
                <h1 className="text-2xl font-bold tracking-tight text-primary">
                    SocialiX
                </h1>

                {/* Actions */}
                <div className="flex items-center gap-2">
                    <button
                        className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
                        aria-label="Notifications"
                    >
                        <Bell size={22} />
                    </button>

                    <button
                        className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
                        aria-label="Settings"
                    >
                        <Settings size={22} />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default MobileHeader;