import ProfileStats from "./ProfileStats";
import Bio from "./Bio";
import ActionButtons from "./ActionButtons";

import { profile } from "@/data/profileData";
import { Camera } from "lucide-react";


const ProfileHeader = () => {
  return (
    <section className="space-y-6">

      <div className="
        flex flex-col gap-6
        md:flex-row
      ">

        {/* Avatar */}
        <div className="relative mx-auto md:mx-0">

          <div className="
            h-32 w-32
            md:h-40 md:w-40
            rounded-full
            bg-gradient-to-tr from-primary to-secondary
            p-1
          ">

            <img
              src={profile.avatar}
              alt={profile.name}
              className="
                h-full w-full
                rounded-full
                border-4 border-background
                object-cover
              "
            />

          </div>


          <button
            className="
            absolute bottom-2 right-2
            rounded-full
            bg-primary
            p-2
            text-white
            border-4 border-background
            "
          >
            <Camera size={16} />
          </button>

        </div>



        {/* Details */}
        <div className="flex-1 space-y-5">


          <div className="
            flex flex-col gap-4
            md:flex-row
            md:justify-between
            md:items-center
          ">

            <div>

              <h1 className="text-3xl font-bold">
                {profile.name}
              </h1>

              <p className="text-muted-foreground">
                @{profile.username}
              </p>

            </div>


            <ActionButtons />

          </div>



          <ProfileStats />


          <Bio />

        </div>

      </div>

    </section>
  );
};


export default ProfileHeader;