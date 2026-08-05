"use client";
// app/messages/page.tsx


import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import ConversationList from "./component/converstaionList/ConversationList";
import ChatWindow from "./component/chat/ChatWindow";
import { ConversationFilter } from "./component/converstaionList/ConversationFilters";
import { chatApi, useGetConversationMessagesQuery, useGetConversationsQuery } from "./api/chat.api";
import useChatSocket from "./hooks/useChatSocket";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { ConversationResponse } from "@/types/chat";




export default function ChatPage() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user)
  const searchParams = useSearchParams();
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
    useState<ConversationResponse | null>(null)
  const [isMobileChatOpen, setIsMobileChatOpen] = useState(false)
  const [filter, setFilter] = useState<ConversationFilter>("all")

  // Auto-select conversation from URL query param (e.g. /chat?conversationId=15)
  useEffect(() => {
    const conversationIdParam = searchParams.get("conversationId");
    if (!conversationIdParam || conversations.length === 0) return;

    const targetId = Number(conversationIdParam);
    const match = conversations.find(
      (c) => c.conversation.id === targetId
    );

    if (match) {
      handleSelectConversation(match);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [conversations, searchParams]);

  const handleSelectConversation = (
    conversation: ConversationResponse
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
  }
  const selectedCon = selectedConversation?.id ?? 0
  const {
    data: messagesResponse,
    isLoading: messagesLoading,
  } = useGetConversationMessagesQuery(
    selectedCon,
    {
      skip: !selectedConversation,
    }
  );


  const currentUserId = user!.id

  const handleSendMessage = (text: string) => {
    if (!selectedConversation) return;

    const receiver = selectedConversation.conversation.participants.find(
      (participant) => participant.user.id !== currentUserId
    );

    if (!receiver) return;

    sendMessage({
      conversationId: selectedConversation.conversation.id,
      receiverId: receiver.user.id,
      content: text,
    });
  };

  const handleDeleteMessage = (messageId: number) => {
    deleteForEveryone({
      conversationId: Number(selectedConversation!.id),
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