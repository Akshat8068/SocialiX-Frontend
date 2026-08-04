// app/messages/page.tsx

"use client";

import { useEffect, useState } from "react";
import ConversationList, { ConversationListItem } from "./component/converstaionList/ConversationList";
import ChatWindow from "./component/chat/ChatWindow";
import { ConversationFilter } from "./component/converstaionList/ConversationFilters";
import { chatApi, useGetConversationMessagesQuery, useGetConversationsQuery } from "./api/chat.api";
import useChatSocket from "./hooks/useChatSocket";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import User from "@/app/(main)/user/page";




export default function ChatPage() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user)
  const { data, isLoading, isError, } = useGetConversationsQuery();
  const [isTyping, setIsTyping] = useState(false)
  const {
    joinConversation,
    sendMessage,
    typingStart,
    typingStop,
    markSeen,
    deleteForEveryone
  } = useChatSocket({
    onNewMessage: (message) => {
      dispatch(
        chatApi.util.updateQueryData(
          "getConversationMessages",
          Number(message.conversationId),
          (draft) => {
            draft.data.push(message);
          }
        )
      );
    },

    onTyping: (payload) => {
      setIsTyping(payload.isTyping);
    },
    onMessageSeen: (payload) => {
      dispatch(
        chatApi.util.updateQueryData(
          "getConversationMessages",
          Number(payload.conversationId),
          (draft) => {
            const msg = draft.data.find(
              (m) => m.id === payload.messageId
            );

            if (msg) {
              msg.seenAt = payload.seenAt;
            }
          }
        )
      );
    },
    onMessageDeleted: ({
      messageId,
      conversationId,
    }) => {
      dispatch(
        chatApi.util.updateQueryData(
          "getConversationMessages",
          Number(conversationId),
          (draft) => {
            draft.data = draft.data.filter(
              (m) => m.id !== messageId
            );
          }
        )
      );
    },
  });

  const conversations = data?.data ?? []
  const [selectedConversation, setSelectedConversation] =
    useState<ConversationListItem | null>(null)
  const [isMobileChatOpen, setIsMobileChatOpen] = useState(false)
  const [filter, setFilter] = useState<ConversationFilter>("all")

  const handleSelectConversation = (
    conversation: ConversationListItem
  ) => {
    setSelectedConversation(conversation);

    joinConversation({
      conversationId: Number(conversation.id),
    })


    if (window.innerWidth < 768) {
      setIsMobileChatOpen(true);
    }

  };


  const handleBack = () => {
    setIsMobileChatOpen(false);
  };
  const {
    data: messagesResponse,
    isLoading: messagesLoading,
  } = useGetConversationMessagesQuery(
    selectedConversation?.id!,
    {
      skip: !selectedConversation,
    }
  );


  const currentUserId = user!.id

  const handleSendMessage = (text: string) => {

    if (!selectedConversation) return;

    sendMessage({
      conversationId: Number(selectedConversation.id),
      receiverId,
      content: text,
    });

  };

  const handleDeleteMessage = (messageId: number) => {
    deleteForEveryone({
      conversationId:Number(selectedConversation!.id),
      messageId,
    });
  }
  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        Loading conversations...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex h-screen items-center justify-center">
        Failed to load conversations.
      </div>
    );
  }
  const messages = messagesResponse?.data ?? []
  return (
    <main className="flex h-[calc(100vh-64px)] overflow-hidden bg-surface">


      <ConversationList
        conversations={conversations}
        selectedConversation={selectedConversation}
        filter={filter}
        onFilterChange={setFilter}
        onSelectConversation={handleSelectConversation}
        className={`
          ${isMobileChatOpen
            ? "hidden"
            : "flex"
          }
          md:flex
        `}
      />

      <ChatWindow
        conversation={selectedConversation}
        messages={messages}
        onDeleteMessage={handleDeleteMessage}
        currentUserId={currentUserId}
        isTyping={isTyping}
        typingStart={typingStart}
        typingStop={typingStop}
        onSendMessage={handleSendMessage}
        onBack={handleBack}
        className={`
    flex-1
    ${isMobileChatOpen ? "flex" : "hidden"}
    md:flex
  `}
      />
    </main>
  );
}