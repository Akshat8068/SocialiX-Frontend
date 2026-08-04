"use client";

import PostHeader from "./PostHeader";
import PostMedia from "./PostMedia";
import PostActions from "./PostActions";
import PostCaption from "./PostCaption";
import PostComments from "./PostComments";
import AddComment from "./AddComment";
import { useState } from "react";
import UserListModel from "@/components/UserListModel/UserListModel";
import { Post } from "@/types/post";
import { useDeletePostMutation } from "../api/post.api";
import { toast } from "react-toastify";
import { useGetLikedUsersQuery, useToggleLikeMutation } from "@/features/likeAndComment/api/like.api";
import { useCreateCommentMutation, useGetPostCommentsQuery } from "@/features/likeAndComment/api/comment.api";

import CommentModel from "./CommentModel";

interface FeedPostProps {
   post:Post
}

export default function FeedPost({ post }: FeedPostProps) {
    const [search, setSearch] = useState("")
    const [deletePost, { isLoading: isDeleting }] = useDeletePostMutation()
    const [toggleLike] = useToggleLikeMutation()
    const handleLike = async () => {
        try {
            const res = await toggleLike({ postId: post.id }).unwrap();

            toast.success(res.message);
        } catch {
            toast.error("Something went wrong");
        }
    };
    const handleDelete = async () => {
        try {
            await deletePost({ postId: post.id }).unwrap();
            toast.success("Post deleted successfully");
        } catch (error) {
            toast.error("Failed to delete post");
        }
    }
    const { data: commentsData } = useGetPostCommentsQuery({
        postId: post.id,
    });

    const comments = commentsData?.data ?? []
    const [content, setContent] = useState("");
    const [showAllComments, setShowAllComments] = useState(false);
    const [createComment] = useCreateCommentMutation()

    const handleComment = async (content: string) => {
        try {
            await createComment({
                postId: post.id,
                content,
            }).unwrap();

            toast.success("Comment added");
        } catch {
            toast.error("Failed to add comment");
        }
    };
    const [openLikes, setOpenLikes] = useState(false);

    const {data: likedUsersData,isLoading: likedUsersLoading,} = useGetLikedUsersQuery({
        postId: post.id,
    });
    const likedUsers =likedUsersData?.data.map((user) => ({
            id: user.id,
            fullName: user.fullname,
            username: user.username,
            profilePicture: user.profilePicture,
            isVerified: user.isVerified,
            isFollowing: user.isFollowing,
    })) ?? []
    return (
        <article className="mb-8 overflow-hidden rounded-xl border bg-card shadow-sm">
            <PostHeader
                fullname={post.user.fullname}
                username={post.user.username}
                profilePicture={post.user.profilePicture ?? undefined}
                verified={post.user.isVerified}
                createdAt={post.createdAt}
                onDelete={handleDelete}
            />

            <PostMedia
                image={post.media[0]?.secureUrl}
                alt={post.caption ?? ""}
            />

            <PostActions
                likes={post.likeCount}
                isLiked={post.isLiked}
                comments={post.commentCount}
                shares={0}
                isSaved={false}
                onLikesClick={() => setOpenLikes(true)}
                onLike={handleLike}
            />


            <PostCaption
                username={post.user.username}
                caption={post.caption ?? ""}
            />

            <PostComments
                comments={comments}
                totalComments={comments.length}
                onViewAll={() => setShowAllComments(true)}
            />

            <AddComment
                profilePicture={post.user.profilePicture ?? "/Hero.jpg"}
                onSubmit={handleComment}
            />
            <UserListModel
                open={openLikes}
                onClose={() => setOpenLikes(false)}
                title="Likes"
                type="likes"
                count={likedUsers.length}
                users={likedUsers}
                loading={likedUsersLoading}
                search={search}
                onSearchChange={setSearch}
                onFollow={(id) => { }}
                onUnfollow={(id) => { }}
                onMessage={(id) => { }}
            />
            {showAllComments && (
                <CommentModel
                    comments={comments}
                    onClose={() => setShowAllComments(false)}
                />
            )}
        </article>
    );
}