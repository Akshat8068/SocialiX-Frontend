"use client";

import Image from "next/image";
import {  Link2, Share2, Pencil, MessageCirclePlus, Lock } from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { User } from "@/types/auth";
interface ProfileHeaderProps {
    user: User;
    onFollowersClick: () => void;
    onFollowingClick: () => void;
    isOwnProfile: boolean;
    followerCount: number;
    followingCount: number;
    postCount:number
}

export default function ProfileHeader({onFollowersClick,onFollowingClick, user,postCount, isOwnProfile,followerCount,followingCount }: ProfileHeaderProps) {

    return (
        <>

            <section className="space-y-6 md:hidden">

                <div className="flex items-end justify-between">

                    <div className="relative">

                        <div className="h-24 w-24 rounded-full bg-primary p-1">
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


                       

                    </div>

                    <div className="flex flex-1 justify-around">

                        <div className="text-center">
                            <p className="text-lg font-bold">{postCount}</p>
                            <p className="text-xs text-muted-foreground">Posts</p>
                        </div>

                        <button
                            onClick={onFollowersClick}
                            className="text-left"
                        >
                            <span className="font-bold">{followerCount}</span>{" "}
                            Followers
                        </button>

                        <button
                            onClick={onFollowingClick}
                            className="text-left"
                        >
                            <span className="font-bold">{followingCount}</span>{" "}
                            Following
                        </button>

                    </div>

                </div>
                

                <div>
                    <div className="flex items-center gap-2">
                        <h2 className="text-2xl font-bold">
                            @{user.username}
                        </h2>

                        {user.accountType === "PRIVATE" && (
                            <Lock size={16} className="font-bold  text-muted-foreground" />
                        )}
                    </div>
                    

                    <p className="mt-1 text-muted-foreground">
                        {user?.fullname}
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

                <div className="h-40 w-40 relative rounded-full bg-primary  p-1">
                    <div className="h-full w-full overflow-hidden rounded-full border-4 border-surface">
                        <Image
                            src={user?.profilePicture || "/Hero.jpg"}
                            alt={user?.fullname || "User profile"}
                            width={160}
                            height={160}
                            className="h-full w-full object-cover"
                        />

                    </div>
                    

                </div>


                <div className="flex-1  space-y-6">

                    <div className="flex items-center justify-between">

                        <div>

                            <div className="flex items-center gap-2">
                                <h2 className="text-2xl font-bold">
                                    @{user.username}
                                </h2>

                                {user.accountType === "PRIVATE" && (
                                    <Lock size={16} className="font-bold  text-muted-foreground" />
                                )}
                            </div>


                            <p className="mt-1 text-muted-foreground">
                                {user?.fullname}
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
                            <span className="font-bold">{postCount}</span>{" "}
                            Posts
                        </div>

                        <button
                            onClick={onFollowersClick}
                            className="text-left"
                        >
                            <span className="font-bold">{followerCount}</span>{" "}
                            Followers
                        </button>

                        <button
                            onClick={onFollowingClick}
                            className="text-left"
                        >
                            <span className="font-bold">{followingCount}</span>{" "}
                            Following
                        </button>

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