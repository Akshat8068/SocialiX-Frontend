"use client";

interface Comment {
    id: number;
    username: string;
    comment: string;
}

interface PostCommentsProps {
    comments: Comment[];
    totalComments: number;
    onViewAll?: () => void;
}

export default function PostComments({
    comments,
    totalComments,
    onViewAll,
}: PostCommentsProps) {
    return (
        <div className="space-y-3 border-t px-4 pt-3">
            {comments.slice(0, 2).map((comment) => (
                <div key={comment.id} className="flex gap-2 text-sm">
                    <span className="font-semibold">{comment.username}</span>
                    <span className="text-muted-foreground">
                        {comment.comment}
                    </span>
                </div>
            ))}

            {totalComments > 0 && (
                <button
                    onClick={onViewAll}
                    className="pb-3 text-sm font-medium text-primary transition hover:underline"
                >
                    View all {totalComments} comments
                </button>
            )}
        </div>
    );
}