"use client";

import Image from "next/image";
import {
    Bell,
    CheckCircle2,
    Heart,
    MessageCircle,
    UserPlus,
    UserRoundCheck,
} from "lucide-react";

import type {
    Notification,
    NotificationType,
} from "@/types/notification";
import Link from "next/link";

interface NotificationItemProps {
    notification: Notification;
    onRead?: (id: number) => void;
}

export default function NotificationItem({
    notification,
    onRead,
}: NotificationItemProps) {
    const { sender, type, message, createdAt, isRead } = notification;

    const senderName = sender?.username

    const getNotificationContent = () => {
        switch (type) {
            case "FOLLOW":
                return "started following you.";

            case "FOLLOW_REQUEST":
                return "requested to follow you.";

            case "FOLLOW_ACCEPTED":
                return "accepted your follow request.";

            case "LIKE":
                return "liked your post.";

            case "COMMENT":
                return "commented on your post.";

            case "MESSAGE":
                return "sent you a message.";

            default:
                return "sent you a notification.";
        }
    }

    const getNotificationIcon = () => {
        switch (type) {
            case "FOLLOW":
                return <UserPlus className="h-3.5 w-3.5" />;

            case "FOLLOW_REQUEST":
                return <UserRoundCheck className="h-3.5 w-3.5" />;

            case "FOLLOW_ACCEPTED":
                return <CheckCircle2 className="h-3.5 w-3.5" />;

            case "LIKE":
                return <Heart className="h-3.5 w-3.5 fill-current" />;

            case "COMMENT":
                return <MessageCircle className="h-3.5 w-3.5" />;

            case "MESSAGE":
                return <Bell className="h-3.5 w-3.5" />;

            default:
                return <Bell className="h-3.5 w-3.5" />;
        }
    };

    const getIconBackground = () => {
        switch (type) {
            case "LIKE":
                return "bg-red-500 text-white";

            case "COMMENT":
                return "bg-blue-500 text-white";

            case "FOLLOW":
            case "FOLLOW_REQUEST":
                return "bg-green-500 text-white";

            case "FOLLOW_ACCEPTED":
                return "bg-purple-500 text-white";

            case "MESSAGE":
                return "bg-primary text-primary-foreground";

            default:
                return "bg-muted text-muted-foreground";
        }
    };

    const formatTime = (date: string) => {
        const notificationDate = new Date(date);
        const now = new Date();

        const difference =
            now.getTime() - notificationDate.getTime();

        const minutes = Math.floor(difference / 60000);

        if (minutes < 1) return "now";
        if (minutes < 60) return `${minutes}m`;

        const hours = Math.floor(minutes / 60);

        if (hours < 24) return `${hours}h`;

        const days = Math.floor(hours / 24);

        if (days < 7) return `${days}d`;

        return notificationDate.toLocaleDateString();
    };

    const handleClick = () => {
        if (!isRead && onRead) {
            onRead(notification.id);
        }
    };

    return (
        <div
            onClick={handleClick}
            className={`relative flex cursor-pointer gap-3 border-b px-4 py-4 transition hover:bg-muted/50 md:px-6 lg:px-8 ${!isRead ? "bg-muted/20" : ""
                }`}
        >
            {!isRead && (
                <div className="absolute left-2 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-primary md:left-3" />
            )}

            <Link href={`/user/${sender?.id}`}>
            <div
                className={`relative shrink-0 ${!isRead ? "ml-2 md:ml-1" : ""
                    }`}
            >
                <div className="relative h-12 w-12 overflow-hidden rounded-full bg-muted">

                    <Image
                        src={sender?.profilePicture || "/Hero.jpg"}
                        alt={senderName || "Profile picture"}
                        fill
                        className="object-cover"
                    />

                </div>

                <div
                    className={`absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full ${getIconBackground()}`}
                >
                    {getNotificationIcon()}
                </div>
            </div>
            </Link>

            <div className="min-w-0 flex-1">
                <p className="text-sm leading-5 text-foreground md:text-[15px]">
                    <span className="font-bold">{senderName}</span>{" "}
                    {getNotificationContent()}
                </p>

                <p className="mt-1 text-xs text-muted-foreground">
                    {formatTime(createdAt)}
                </p>

                {message &&
                    (type === "COMMENT" || type === "MESSAGE") && (
                        <div
                            className={`mt-2 text-sm ${type === "COMMENT"
                                    ? " pl-3 italic text-muted-foreground"
                                    : "rounded-lg bg-muted px-3 py-2 text-muted-foreground"
                                }`}
                        >
                            {message}
                        </div>
                    )}

                {type === "FOLLOW_REQUEST" && (
                    <div className="mt-3 flex gap-2">
                        <button
                            onClick={(event) => {
                                event.stopPropagation();

                                // Follow request accept logic here
                            }}
                            className="rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
                        >
                            Confirm
                        </button>

                        <button
                            onClick={(event) => {
                                event.stopPropagation();

                                // Follow request reject logic here
                            }}
                            className="rounded-full px-4 py-1.5 text-sm font-medium transition hover:bg-muted"
                        >
                            Delete
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}