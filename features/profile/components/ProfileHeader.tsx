"use client";

import Image from "next/image";
import { Camera, Link2, Share2, Pencil, LayoutDashboard, BadgeCheck, MessageCirclePlus } from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { User } from "@/types/auth";
interface ProfileHeaderProps {
    user: User ;
    isOwnProfile: boolean;
}

export default function ProfileHeader({ user, isOwnProfile }: ProfileHeaderProps) {

    return (
        <>

            <section className="space-y-6 md:hidden">

                <div className="flex items-end justify-between">

                    <div className="relative">

                        <div className="h-24 w-24 rounded-full bg-gradient-to-tr from-primary to-secondary p-1">
                            <div className="h-full w-full overflow-hidden rounded-full border-4 border-surface">
                                <Image
                                    src={user?.profilePicture || "/hero.jpg"}
                                    alt={user?.fullname || "USer"}
                                    width={96}
                                    height={96}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>


                        {isOwnProfile && (<Button
                            variant="primary"
                            size="lg"
                            className="absolute bottom-0 right-0 rounded-full p-2"
                        >
                            <Camera size={36} />
                        </Button>)}

                    </div>

                    <div className="flex flex-1 justify-around">

                        <div className="text-center">
                            <p className="text-lg font-bold">{user?.postCount}</p>
                            <p className="text-xs text-muted-foreground">Posts</p>
                        </div>

                        <div className="text-center">
                            <p className="text-lg font-bold">{user?.followercount}</p>
                            <p className="text-xs text-muted-foreground">Followers</p>
                        </div>

                        <div className="text-center">
                            <p className="text-lg font-bold">{user?.followingCount}</p>
                            <p className="text-xs text-muted-foreground">Following</p>
                        </div>

                    </div>

                </div>

                <div>

                    <div className="flex items-center gap-2">

                        <h2 className="text-2xl font-bold">
                            {user?.fullname}
                        </h2>

                        {/* {user.verified && (
                            <BadgeCheck
                                size={20}
                                className="text-primary"
                            />
                        )} */}

                    </div>

                    <p className="mt-1 text-muted-foreground">
                        @{user?.username}
                    </p>

                    <p className="mt-4 leading-7">
                        {user?.bio}
                    </p>

                    {user.website && (<a
                        href={user?.website}
                        className="mt-3 flex items-center gap-2 text-primary"
                    >
                        <Link2 size={16} />

                        {user?.website}
                    </a>)}

                </div>

                <div className="grid grid-cols-2 gap-3">
                    {isOwnProfile ? (
                        <>
                            <Link href={"/profile/edit"}>
                                <Button
                                    variant="primary"
                                    size="lg"
                                    leftIcon={<Pencil size={16} />}
                                >
                                    Edit Profile
                                </Button>
                            </Link>
                            <Button
                                variant="outlined"
                                size="lg"
                                leftIcon={<Share2 size={16} />}
                            >
                                Share
                            </Button>
                        </>
                    ) : (
                        <>
                            <Link href={"/profile/edit"}>
                                <Button
                                    variant="primary"
                                    size="lg"
                                    leftIcon={<Pencil size={16} />}
                                >
                                    Follow
                                </Button>
                            </Link>
                            <Button
                                variant="outlined"
                                size="lg"
                                leftIcon={<MessageCirclePlus size={16} />}
                            >
                                Share
                            </Button>
                        </>
                    )}
                </div>

            </section>


            <section className="hidden gap-10 md:flex">

                <div className="h-40 w-40 relative rounded-full bg-gradient-to-tr from-primary to-secondary p-1">
                    <div className="h-full w-full overflow-hidden rounded-full border-4 border-surface">
                        <Image
                            src={user?.profilePicture || "/Hero.jpg"}
                            alt={user?.fullname || "User profile"}
                            width={160}
                            height={160}
                            className="h-full w-full object-cover"
                        />

                    </div>
                    {isOwnProfile && (<Button
                        variant="primary"
                        size="lg"
                        className="absolute bottom-0 right-0 rounded-full p-2"
                    >
                        <Camera size={36} />
                    </Button>)}

                </div>


                <div className="flex-1  space-y-6">

                    <div className="flex items-center justify-between">

                        <div>

                            <div className="flex items-center gap-2">

                                <h1 className="text-4xl font-bold">
                                    {user?.fullname}
                                </h1>

                                {/* {user.verified && (
                                    <BadgeCheck
                                        className="text-primary"
                                    />
                                )} */}

                            </div>

                            <p className="text-muted-foreground">
                                @{user?.username}
                            </p>

                        </div>

                        <div className="flex gap-3">
                            {isOwnProfile ? (
                                <>
                                    <Link href={"/profile/edit"}>
                                        <Button
                                            variant="primary"
                                            size="lg"
                                            leftIcon={<Pencil size={16} />}
                                        >
                                            Edit Profile
                                        </Button>
                                    </Link>
                                    <Button
                                        variant="outlined"
                                        size="lg"
                                        leftIcon={<Share2 size={16} />}
                                    >
                                        Share
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <Link href={"/profile/edit"}>
                                        <Button
                                            variant="primary"
                                            size="lg"
                                            leftIcon={<Pencil size={16} />}
                                        >
                                            Follow
                                        </Button>
                                    </Link>
                                    <Button
                                        variant="outlined"
                                        size="lg"

                                    >
                                        <MessageCirclePlus size={16} />
                                    </Button>
                                </>
                            )}

                        </div>

                    </div>

                    <div className="flex gap-10   py-4">

                        <div>
                            <span className="font-bold">{user?.postCount}</span>{" "}
                            Posts
                        </div>

                        <div>
                            <span className="font-bold">{user?.followercount}</span>{" "}
                            Followers
                        </div>

                        <div>
                            <span className="font-bold">{user?.followingCount}</span>{" "}
                            Following
                        </div>

                    </div>

                    <div className="max-w-2xl space-y-3">

                        <p className="leading-8">
                            {user?.bio}
                        </p>

                        {user.website && (<a
                            href={user?.website}
                            className="flex items-center gap-2 text-primary"
                        >
                            <Link2 size={18} />

                            {user?.website}
                        </a>)}

                    </div>

                </div>

            </section >
        </>
    );
}