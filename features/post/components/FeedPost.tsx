"use client";

import PostHeader from "./PostHeader";
import PostMedia from "./PostMedia";
import PostActions from "./PostActions";
import PostCaption from "./PostCaption";
import PostComments from "./PostComments";
import AddComment from "./AddComment";
import { useState } from "react";
import { likedUsers } from "../data";
import UserListModel from "@/components/UserListModel/UserListModel";

interface FeedPostProps {
    post: {
        id: number;
        fullname: string;
        username: string;
        profilePicture: string;
        location: string;
        createdAt: string;
        verified: boolean;
        image: string;
        likes: number;
        commentsCount: number;
        shares: number;
        isLiked: boolean;
        isSaved: boolean;
        caption: string;
        comments: {
            id: number;
            username: string;
            comment: string;
        }[];
    };
}

export default function FeedPost({ post }: FeedPostProps) {
    const [openLikes, setOpenLikes] = useState(false);

    const [search, setSearch] = useState("")
    return (
        <article className="mb-8 overflow-hidden rounded-xl border bg-card shadow-sm">
            <PostHeader
                fullname={post.fullname}
                username={post.username}
                profilePicture={post.profilePicture}
                location={post.location}
                createdAt={post.createdAt}
                verified={post.verified}
            />

            <PostMedia
                image={post.image}
                alt={post.caption}
            />

            <PostActions
                likes={post.likes}
                comments={post.commentsCount}
                shares={post.shares}
                isLiked={post.isLiked}
                isSaved={post.isSaved}
                onLikesClick={() => setOpenLikes(true)}
            />

            <PostCaption
                username={post.username}
                caption={post.caption}
            />

            <PostComments
                comments={post.comments}
                totalComments={post.commentsCount}
            />

            <AddComment
                profilePicture="/Hero.jpg"
            />
            <UserListModel
                open={openLikes}
                onClose={() => setOpenLikes(false)}
                users={likedUsers}
                title="Likes"
                type="likes"

                count={post.likes}

                search={search}
                onSearchChange={setSearch}

                onFollow={(id) => { }}
                onUnfollow={(id) => { }}
                onMessage={(id) => { }}
            />
        </article>
    );
}