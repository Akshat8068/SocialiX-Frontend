// app/messages/components/ChatWindow/MessageList.tsx

"use client";

import { useEffect, useRef } from "react";

import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";
import { ConversationListItem } from "../converstaionList/ConversationList";
import { Message } from "@/types/chat";

interface MessageListProps {
  conversation: ConversationListItem;
  messages: Message[];
  currentUserId: number;
  isTyping?: boolean;
  onDeleteMessage: (messageId: number) => void
}

const MessageList = ({
  conversation,
  messages,
  currentUserId,
  isTyping = false,
  onDeleteMessage
}: MessageListProps) => {
  const bottomRef = useRef<HTMLDivElement>(null);

  // Auto scroll to latest message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  return (
    <div className="custom-scrollbar flex-1 overflow-y-auto bg-surface-container-lowest px-4 py-6 md:px-6">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-4">
        {/* Date Divider */}
        <div className="flex justify-center">
          <span className="rounded-full bg-surface-container px-3 py-1 text-xs font-medium text-on-surface-variant">
            Today
          </span>
        </div>

        {/* Messages */}
        {messages.map((message) => {
          const isOwnMessage =
            message.sender.id === currentUserId;

          return (
            <MessageBubble
              key={message.id}
              message={message}
              onDelete={onDeleteMessage}
              isOwnMessage={isOwnMessage}
            />
          );
        })}

        {/* Typing Indicator */}
        {isTyping && (
          <TypingIndicator
            name={conversation.name}
          />
        )}

        {/* Auto Scroll Target */}
        <div ref={bottomRef} />
      </div>
    </div>
  );
};

export default MessageList;