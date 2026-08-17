"use client";

import type { Notification } from "@/types/notification";
import NotificationItem from "./NotificationItem";

interface NotificationListProps {
  notifications: Notification[];
  onRead: (id: number) => void;
}

export default function NotificationList({
  notifications,
  onRead,
}: NotificationListProps) {
  if (!notifications.length) {
    return (
      <div className="flex min-h-100 items-center justify-center px-4 text-center text-sm text-muted-foreground">
        No notifications yet
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {notifications.map((notification) => (
        <NotificationItem
          key={notification.id}
          notification={notification}
          onRead={onRead}
        />
      ))}

      <div className="flex justify-center py-8 text-sm text-muted-foreground">
        No more notifications
      </div>
    </div>
  );
}