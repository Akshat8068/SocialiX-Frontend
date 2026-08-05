// app/messages/components/ChatWindow/ChatWindow.tsx

"use client";

import { ConversationResponse, Message, TypingPayload } from "@/types/chat";

import MessageList from "./ MessageList";
import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";


interface ChatWindowProps {
  conversation: ConversationResponse | null;
  messages: Message[];
  currentUserId: number;
  isTyping?: boolean;

  typingStart: (payload: TypingPayload) => void;
  typingStop: (payload: TypingPayload) => void;
  onDeleteMessage: (messageId: number) => void;
  onBack?: () => void;
  onSendMessage: (message: string) => void;
  className?: string;
  isOnline: boolean
}

const ChatWindow = ({
  conversation,
  messages,
  currentUserId,
  isOnline,
  isTyping = false,
  typingStart,
  typingStop,
  onBack,
  onSendMessage,
  onDeleteMessage,
  className = "",
}: ChatWindowProps) => {
  if (!conversation) {
    return (
      <section
        className={`flex-1 items-center justify-center bg-surface-container-lowest hidden md:flex ${className}`}
      >
        <div className="text-center">
          <h2 className="text-xl font-semibold text-on-surface">
            Select a conversation
          </h2>

          <p className="mt-2 text-sm text-on-surface-variant">
            Choose a chat from the sidebar to start messaging.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      className={`
        flex
        flex-1
        flex-col
        pb-20 md:pb-2
        bg-surface-container-lowest
        ${className}
      `}
    >
      <ChatHeader
        conversation={conversation}
        onBack={onBack}
        isOnline={isOnline}
      />

      <MessageList
        messages={messages}
        currentUserId={currentUserId}
        isTyping={isTyping}
        conversation={conversation}
        onDeleteMessage={onDeleteMessage}
      />

      <MessageInput
        conversationId={Number(conversation.conversation.id)}
        onSend={onSendMessage}
        typingStart={typingStart}
        typingStop={typingStop}
      />
    </section>
  );
};

export default ChatWindow;