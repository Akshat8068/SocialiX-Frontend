import {
  Home,
  Compass,
  Clapperboard,
  MessageCircle,
  Bell,
  BarChart3,
  Plus,
} from "lucide-react";

const DesktopSidebar = () => {
  return (
    <aside className="fixed left-0 top-0 hidden h-screen w-64 border-r border-border bg-background lg:flex lg:flex-col">
      {/* Logo */}
      <div className="px-6 py-8">
        <h1 className="text-3xl font-bold tracking-tight text-primary">
          SocialiX
        </h1>

        <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Premium Pro
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 px-4">
        <SidebarItem icon={<Home size={22} />} label="Home" />

        <SidebarItem icon={<Compass size={22} />} label="Explore" />

        <SidebarItem icon={<Clapperboard size={22} />} label="Reels" />

        <SidebarItem icon={<MessageCircle size={22} />} label="Messages" />

        <SidebarItem icon={<Bell size={22} />} label="Notifications" />

        <SidebarItem
          active
          icon={<BarChart3 size={22} />}
          label="Analytics"
        />
      </nav>

      {/* Create Post */}
      <div className="px-4">
        <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 font-semibold text-primary-foreground transition hover:opacity-90 active:scale-95">
          <Plus size={18} />
          Create Post
        </button>
      </div>

      {/* User */}
      <div className="mt-8 flex items-center gap-3 border-t border-border px-4 py-6">
        <img
          src={profile.avatar}
          alt={profile.name}
          className="h-11 w-11 rounded-full object-cover"
        />

        <div className="min-w-0">
          <p className="truncate font-semibold">{profile.name}</p>

          <p className="truncate text-xs text-muted-foreground">
            @{profile.username}
          </p>
        </div>
      </div>
    </aside>
  );
};

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

function SidebarItem({
  icon,
  label,
  active = false,
}: SidebarItemProps) {
  return (
    <button
      className={`flex w-full items-center gap-4 rounded-xl px-4 py-3 text-left transition-all active:scale-95 ${active
          ? "bg-primary text-primary-foreground"
          : "text-muted-foreground hover:bg-muted hover:text-foreground"
        }`}
    >
      {icon}

      <span className="font-medium">{label}</span>
    </button>
  );
}

export default DesktopSidebar;