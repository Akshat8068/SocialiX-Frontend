// app/messages/components/ChatWindow/ChatHeader.tsx

"use client";

import Image from "next/image";
import {
  ArrowLeft,
  Info,
  Phone,
  Video,
  Users,
} from "lucide-react";
import { Conversation } from "../converstaionList/ConversationList";



interface ChatHeaderProps {
  conversation: Conversation;
  onBack?: () => void;
}

const ChatHeader = ({
  conversation,
  onBack,
}: ChatHeaderProps) => {
  return (
    <header className="flex h-16 items-center justify-between border-b border-outline-variant/30 bg-surface px-4 md:px-6">
      {/* Left */}
      <div className="flex items-center gap-3">
        {/* Mobile Back */}
        <button
          type="button"
          onClick={onBack}
          className="rounded-full p-2 transition-colors hover:bg-surface-container md:hidden"
          aria-label="Back"
        >
          <ArrowLeft size={20} />
        </button>

        {/* Avatar */}
        <div className="relative shrink-0">
          {conversation.avatar ? (
            <Image
              src={conversation.avatar}
              alt={conversation.name}
              width={44}
              height={44}
              className="rounded-full object-cover"
            />
          ) : (
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
              {conversation.isGroup ? (
                <Users size={20} />
              ) : (
                <span className="text-lg font-semibold">
                  {conversation.name.charAt(0)}
                </span>
              )}
            </div>
          )}

          {!conversation.isGroup && (
            <span
              className={`absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-surface ${
                conversation.isOnline
                  ? "bg-green-500"
                  : "bg-gray-400"
              }`}
            />
          )}
        </div>

        {/* Name & Status */}
        <div className="min-w-0">
          <h2 className="truncate text-base font-semibold text-on-surface">
            {conversation.name}
          </h2>

          <p className="truncate text-sm text-on-surface-variant">
            {conversation.isGroup
              ? "Group Chat"
              : conversation.isOnline
              ? "Active now"
              : "Offline"}
          </p>
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-1">
        <button
          type="button"
          className="rounded-full p-2 transition-colors hover:bg-surface-container"
          aria-label="Voice Call"
        >
          <Phone size={20} />
        </button>

        <button
          type="button"
          className="rounded-full p-2 transition-colors hover:bg-surface-container"
          aria-label="Video Call"
        >
          <Video size={20} />
        </button>

        <button
          type="button"
          className="rounded-full p-2 transition-colors hover:bg-surface-container"
          aria-label="Conversation Info"
        >
          <Info size={20} />
        </button>
      </div>
    </header>
  );
};

export default ChatHeader;