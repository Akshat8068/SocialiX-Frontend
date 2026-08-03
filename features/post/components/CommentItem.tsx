"use client";

import { User } from "@/types/auth";
import { Comment } from "@/types/likeandComment";
import {
    Check,
    Pencil,
    Trash2,
    X,
} from "lucide-react";


interface Props {
    comment: Comment;
    currentUser:User |null;

    editingId: number | null;
    editedContent: string;
    setEditedContent: (v: string) => void;
    setEditingId: (v: number | null) => void;

    replyingId: number | null;
    replyContent: string;
    setReplyContent: (v: string) => void;
    setReplyingId: (v: number | null) => void;

    handleReply: (id: number) => void;
    handleDelete: (id: number) => void;
    handleEdit: (comment: Comment) => void;
    handleUpdate: () => void;
}

export default function CommentItem({
    comment,
    currentUser,

    editingId,
    editedContent,
    setEditedContent,
    setEditingId,

    replyingId,
    replyContent,
    setReplyContent,
    setReplyingId,

    handleReply,
    handleDelete,
    handleEdit,
    handleUpdate,
}: Props) {
    return (
        <div className="mt-3">
            <div className="flex justify-between">
                <div className="flex-1">
                    <p className="font-semibold">
                        {comment.user.username}
                    </p>

                    {editingId === comment.id ? (
                        <input
                            value={editedContent}
                            onChange={(e) =>
                                setEditedContent(e.target.value)
                            }
                            className="mt-1 w-full rounded border px-2 py-1"
                        />
                    ) : (
                        <p>{comment.content}</p>
                    )}

                    <button
                        onClick={() => setReplyingId(comment.id)}
                        className="mt-2 text-xs font-medium text-blue-500"
                    >
                        Reply
                    </button>

                    {replyingId === comment.id && (
                        <div className="mt-2 flex gap-2">
                            <input
                                value={replyContent}
                                onChange={(e) =>
                                    setReplyContent(e.target.value)
                                }
                                className="flex-1 rounded border px-2 py-1"
                                placeholder="Write a reply..."
                            />

                            <button
                                onClick={() => handleReply(comment.id)}
                                className="rounded bg-blue-500 px-3 py-1 text-white"
                            >
                                Send
                            </button>
                        </div>
                    )}
                </div>

                {comment.user.id === currentUser?.id && (
                    <div className="flex gap-2">
                        {editingId === comment.id ? (
                            <>
                                <button onClick={handleUpdate}>
                                    <Check
                                        size={18}
                                        className="text-green-600"
                                    />
                                </button>

                                <button
                                    onClick={() => {
                                        setEditingId(null);
                                        setEditedContent("");
                                    }}
                                >
                                    <X
                                        size={18}
                                        className="text-gray-500"
                                    />
                                </button>
                            </>
                        ) : (
                            <>
                                <button
                                    onClick={() => handleEdit(comment)}
                                >
                                    <Pencil
                                        size={18}
                                        className="text-blue-500"
                                    />
                                </button>

                                <button
                                    onClick={() =>
                                        handleDelete(comment.id)
                                    }
                                >
                                    <Trash2
                                        size={18}
                                        className="text-red-500"
                                    />
                                </button>
                            </>
                        )}
                    </div>
                )}
            </div>

            {comment.replies?.length > 0 && (
                <div className="ml-8 mt-3 border-l pl-4 space-y-4">
                    {comment.replies.map((reply: Comment) => (
                        <CommentItem
                            key={reply.id}
                            comment={reply}
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
                    ))}
                </div>
            )}
        </div>
    );
}