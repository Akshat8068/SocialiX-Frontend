import UserProfile from "@/features/profile/components/UserProfile";

interface PageProps {
  params: Promise<{
    userId: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { userId } = await params;
console.log(userId)
  return <UserProfile userId={Number(userId)} />;
}