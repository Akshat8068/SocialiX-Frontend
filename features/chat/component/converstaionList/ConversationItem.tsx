// app/messages/components/ConversationList/ConversationItem.tsx

import Image from "next/image";
import { BadgeCheck, Pin } from "lucide-react";

import type { Conversation } from "./ConversationList";

interface ConversationItemProps {
  conversation: Conversation;
  active?: boolean;
  onClick: () => void;
}

const ConversationItem = ({
  conversation,
  active = false,
  onClick,
}: ConversationItemProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        w-full
        px-4
        py-3
        flex
        items-center
        gap-3
        text-left
        transition-colors
        border-l-4

        ${
          active
            ? "border-primary bg-surface-container-low"
            : "border-transparent hover:bg-surface-container-lowest"
        }
      `}
    >
      {/* Avatar */}
      <div className="relative shrink-0">
        {conversation.avatar ? (
          <Image
            src={conversation.avatar}
            alt={conversation.name}
            width={52}
            height={52}
            className="rounded-full object-cover"
          />
        ) : (
          <div className="flex h-13 w-13 items-center justify-center rounded-full bg-primary/10 text-lg font-semibold text-primary">
            {conversation.name.charAt(0)}
          </div>
        )}

        {!conversation.isGroup && (
          <span
            className={`
              absolute
              bottom-0
              right-0
              h-3.5
              w-3.5
              rounded-full
              border-2
              border-surface

              ${
                conversation.isOnline
                  ? "bg-green-500"
                  : "bg-gray-300"
              }
            `}
          />
        )}
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        {/* Top */}
        <div className="mb-1 flex items-center justify-between">
          <div className="flex items-center gap-1 truncate">
            <h3
              className={`truncate ${
                active || conversation.unreadCount > 0
                  ? "font-semibold"
                  : "font-medium"
              }`}
            >
              {conversation.name}
            </h3>

            {conversation.isVerified && (
              <BadgeCheck className="h-4 w-4 text-blue-500" />
            )}

            {conversation.isPinned && (
              <Pin className="h-3.5 w-3.5 text-on-surface-variant" />
            )}
          </div>

          <span className="ml-3 shrink-0 text-xs text-on-surface-variant">
            {conversation.lastMessageTime}
          </span>
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0 flex-1">
            {conversation.isTyping ? (
              <span className="truncate text-sm font-medium italic text-primary">
                Typing...
              </span>
            ) : (
              <p
                className={`truncate text-sm ${
                  conversation.unreadCount > 0
                    ? "font-medium text-on-surface"
                    : "text-on-surface-variant"
                }`}
              >
                {conversation.lastMessage}
              </p>
            )}
          </div>

          {conversation.unreadCount > 0 && (
            <div className="flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1.5 text-[10px] font-bold text-on-primary">
              {conversation.unreadCount}
            </div>
          )}
        </div>
      </div>
    </button>
  );
};

export default ConversationItem;