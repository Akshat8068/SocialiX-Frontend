
import ProfileHeader from "@/features/profile/components/ProfileHeader";
import ProfileTabs from "@/features/profile/components/ProfileTabs";
import StoryHighlights from "@/features/profile/components/StoryHighlights";


export default function ProfilePage() {
  
  return (
    <>
      <div className=" w-full md:text-xl md:tracking-[0.5px] lg:text-3xl px-2 md:pl-22 lg:pl-68 pt-2">
      <ProfileHeader />
      <ProfileTabs />
    </div>
    </>
  )
}