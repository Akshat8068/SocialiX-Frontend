import { Button } from "@/components/ui/button";
import { User } from "@/types/auth";
import { Eye} from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function UserCard({user}: {user: User;}) {
  return (
    <div className="rounded-2xl border bg-card transition-all hover:shadow-md">
      <Link
        href={`/user/${user.id}`}
      >
      <div className="flex items-center justify-between p-4">
        
          <Image
            src={user.profilePicture || "/Hero.jpg"}
            alt={user.fullname}
            width={56}
            height={56}
            className="rounded-full  object-cover"
          />

          <div className="min-w-0">
            <h3 className="truncate text-base font-semibold">
              {user.fullname}
            </h3>

            <p className="truncate text-sm text-muted-foreground">
              @{user.username}
            </p>
          </div>
          <Button rightIcon={<Eye size={16} />}>View Profile</Button>
        

      </div>
    </Link>
    </div>
  )
}