"use client";

import Image from "next/image";
import {
    BadgeCheck,
    MapPin,
    MoreHorizontal,
} from "lucide-react";

interface PostHeaderProps {
    fullname: string;
    username: string;
    profilePicture?: string;
    location?: string;
    createdAt: string;
    verified?: boolean;
}

export default function PostHeader({
    fullname,
    username,
    profilePicture,
    location,
    createdAt,
    verified = false,
}: PostHeaderProps) {
    return (
        <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
                <Image
                    src={profilePicture || "/Hero.jpg"}
                    alt={fullname}
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full object-cover"
                />

                <div>
                    <div className="flex items-center gap-1">
                        <h3 className="text-base font-semibold">
                            {username}
                        </h3>

                        {verified && (
                            <BadgeCheck
                                size={16}
                                className="fill-sky-500 text-sky-500"
                            />
                        )}
                    </div>

                    <p className="flex items-center gap-1 text-xs text-muted-foreground">
                        {location && (
                            <>
                                <MapPin size={12} />
                                <span>{location}</span>
                                <span>•</span>
                            </>
                        )}

                        <span>{createdAt}</span>
                    </p>
                </div>
            </div>

            <button className="rounded-full p-2 transition-colors hover:bg-muted">
                <MoreHorizontal size={20} />
            </button>
        </div>
    );
}