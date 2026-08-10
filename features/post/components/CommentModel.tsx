"use client";

import {
    useDeleteCommentMutation,
    useReplyCommentMutation,
    useUpdateCommentMutation,
} from "@/features/likeAndComment/api/comment.api";

import { useAppSelector } from "@/store/hooks";
import { useState } from "react";
import { toast } from "react-toastify";
import CommentItem from "./CommentItem";
import { Comment } from "@/types/likeandComment";
import EmptyState from "@/components/common/EmptyState";

interface CommentModelProps {
    comments: Comment[];
    onClose: () => void;
}

export default function CommentModel({
    comments,
    onClose,
}: CommentModelProps) {
    const currentUser = useAppSelector(
        (state) => state.auth.user
    );

    const [deleteComment] =
        useDeleteCommentMutation();

    const [updateComment] =
        useUpdateCommentMutation();

    const [replyComment] =
        useReplyCommentMutation();

    const [editingId, setEditingId] =
        useState<number | null>(null);

    const [editedContent, setEditedContent] =
        useState("");

    const [replyingId, setReplyingId] =
        useState<number | null>(null);

    const [replyContent, setReplyContent] =
        useState("");

    const handleDelete = async (
        commentId: number
    ) => {
        try {
            await deleteComment({
                commentId,
            }).unwrap();

            toast.success("Comment deleted");
        } catch {
            toast.error("Failed to delete comment");
        }
    };

    const handleEdit = (comment: Comment) => {
        setEditingId(comment.id);
        setEditedContent(comment.content);
    };

    const handleUpdate = async () => {
        if (!editingId) return;

        try {
            await updateComment({
                commentId: editingId,
                content: editedContent,
            }).unwrap();

            toast.success("Comment updated");

            setEditingId(null);
            setEditedContent("");
        } catch {
            toast.error("Failed to update");
        }
    };

    const handleReply = async (
        commentId: number
    ) => {
        if (!replyContent.trim()) return;

        try {
            await replyComment({
                commentId,
                content: replyContent,
            }).unwrap();

            toast.success("Reply added");

            setReplyingId(null);
            setReplyContent("");
        } catch {
            toast.error("Failed to reply");
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center ">
            <div className="max-h-[80vh] w-125 overflow-y-auto rounded-lg bg-white p-5">
                <div className="mb-5 flex items-center justify-between">
                    <h2 className="text-lg font-semibold">
                        Comments
                    </h2>

                    <button onClick={onClose}>
                        ✕
                    </button>
                </div>

                {comments.length === 0 ? (
                    <EmptyState variant="comments" />
                ) : (
                    comments.map((comment) => (
                        <CommentItem
                            key={comment.id}
                            comment={comment}
                            currentUser={currentUser}
                            editingId={editingId}
                            editedContent={editedContent}
                            setEditedContent={setEditedContent}
                            setEditingId={setEditingId}
                            replyingId={replyingId}
                            replyContent={replyContent}
                            setReplyContent={setReplyContent}
                            setReplyingId={setReplyingId}
                            handleReply={handleReply}
                            handleDelete={handleDelete}
                            handleEdit={handleEdit}
                            handleUpdate={handleUpdate}
                        />
                    ))
                )}
            </div>
        </div>
    );
}