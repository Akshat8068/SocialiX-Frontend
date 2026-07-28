import Link from "next/link";

interface ProfileStatsProps {
  posts: number;
  followers: number;
  following: number;
}

export default function ProfileStats({
  posts,
  followers,
  following,
}: ProfileStatsProps) {
  return (
    <div className="flex items-center justify-between gap-6 lg:justify-start lg:gap-10">
      <Link
        href="/profile/posts"
        className="flex flex-col items-center transition-opacity hover:opacity-80 lg:items-start"
      >
        <span className="text-lg font-bold text-foreground lg:text-xl">
          {posts}
        </span>
        <span className="text-sm text-muted-foreground">Posts</span>
      </Link>

      <Link
        href="/profile/followers"
        className="flex flex-col items-center transition-opacity hover:opacity-80 lg:items-start"
      >
        <span className="text-lg font-bold text-foreground lg:text-xl">
          {followers.toLocaleString()}
        </span>
        <span className="text-sm text-muted-foreground">Followers</span>
      </Link>

      <Link
        href="/profile/following"
        className="flex flex-col items-center transition-opacity hover:opacity-80 lg:items-start"
      >
        <span className="text-lg font-bold text-foreground lg:text-xl">
          {following.toLocaleString()}
        </span>
        <span className="text-sm text-muted-foreground">Following</span>
      </Link>
    </div>
  );
}