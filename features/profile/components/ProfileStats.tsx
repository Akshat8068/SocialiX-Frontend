import { profile } from "@/data/profileData";


const ProfileStats = () => {

    const stats = [
        {
            label: "Posts",
            value: profile.posts
        },
        {
            label: "Followers",
            value: "8.2k"
        },
        {
            label: "Following",
            value: profile.following
        }
    ];


    return (

        <div className="
      flex gap-8
      border-y border-border
      py-4
    ">

            {
                stats.map((item) => (
                    <div key={item.label}>

                        <p className="font-bold text-xl">
                            {item.value}
                        </p>

                        <p className="text-sm text-muted-foreground">
                            {item.label}
                        </p>

                    </div>
                ))
            }

        </div>

    );
};


export default ProfileStats;