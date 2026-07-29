"use client";

import { useState } from "react";
import Image from "next/image";
import {
    Grid3X3,
    Bookmark,
    UserSquare2,
    Pin,
    Play,
    Copy,
} from "lucide-react";
import clsx from "clsx";
import { dummyPosts } from "../data";
import { useGetProfileQuery } from "../api/profile.api";

const tabs = [
    {
        id: "posts",
        icon: Grid3X3,
    },
    {
        id: "pinned",
        icon: Pin,
    },
    {
        id: "saved",
        icon: Bookmark,
    },
    {
        id: "tagged",
        icon: UserSquare2,
    },
];

export default function ProfileTabs() {
    const [activeTab, setActiveTab] = useState("posts");
    const { data, isLoading, isError } = useGetProfileQuery();
    
        const user = data?.data
        if (isLoading) {
            return <div>Loading...</div>;
        }
    
        if (isError || !data) {
            return <div>Something went wrong.</div>;
        }

    return (
        <section className="mt-8">

            {/* Tabs */}

            <div className="border-b border-outline-variant/30">

                <div className="flex md:mx-auto md:max-w-lg">

                    {tabs.map((tab) => {
                        const Icon = tab.icon;

                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={clsx(
                                    "flex flex-1 items-center justify-center border-b-2 py-4 md:mx-5 transition",
                                    activeTab === tab.id
                                        ? "border-primary text-primary"
                                        : "border-transparent text-on-surface-variant hover:text-on-surface"
                                )}
                            >
                                <Icon size={22} />
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Grid */}

            <div className="mt-1 grid grid-cols-3 gap-1 md:mt-6 md:gap-3">

                {user?.post.map((post) => (
                    <div
                        key={post.id}
                        className="group relative aspect-square overflow-hidden bg-surface-container"
                    >
                        <Image
                            src={post.media[0].secureUrl}
                            alt={post.caption||"Post"}
                            fill
                            className="object-cover transition duration-500 group-hover:scale-110"
                        />

                        {/* {post.type === "carousel" && (
                            <Copy
                                size={18}
                                className="absolute right-2 top-2 text-white"
                            />
                        )} */}

                        {/* {post.type === "video" && (
                            <Play
                                size={18}
                                fill="white"
                                className="absolute right-2 top-2 text-white"
                            />
                        )} */}

                    </div>
                ))}

            </div>

        </section>
    );
}