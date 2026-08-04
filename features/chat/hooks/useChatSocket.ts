import { useEffect } from "react";
import type {
  DeleteForEveryonePayload,
  JoinConversationPayload,
  MarkSeenPayload,
  Message,
  MessageDeletedEvent,
  MessageNotificationEvent,
  MessageSeenEvent,
  SendMessagePayload,
  TypingPayload,
  UserTypingEvent,
} from "@/types/chat";
import { socket } from "../services/socket";

interface UseChatSocketProps {
  onNewMessage?: (message: MessageNotificationEvent) => void;
  onTyping?: (payload: UserTypingEvent) => void;
  onMessageSeen?: (payload: MessageSeenEvent) => void;
  onMessageDeleted?: (payload: MessageDeletedEvent) => void
}

const useChatSocket = ({
  onNewMessage,
  onTyping,
  onMessageSeen,
  onMessageDeleted
}: UseChatSocketProps = {}) => {
  useEffect(() => {
    socket.connect();

    // Connection Events
    socket.on("connect", () => {
      console.log("Socket Connected:", socket.id);
    });

    socket.on("disconnect", () => {
      console.log("Socket Disconnected");
    });

    socket.on("connect_error", (err) => {
      console.error("Socket Error:", err.message);
    });

    // Chat Events
    if (onNewMessage) {
      socket.on("newMessage", onNewMessage);
    }

    if (onTyping) {
      socket.on("typing", onTyping);
    }
    if (onMessageDeleted) {
  socket.on("messageDeleted", onMessageDeleted);
}

    if (onMessageSeen) {
      socket.on("messageSeen", onMessageSeen);
    }

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("connect_error");

      if (onNewMessage) {
        socket.off("newMessage", onNewMessage);
      }

      if (onTyping) {
        socket.off("typing", onTyping);
      }

      if (onMessageSeen) {
        socket.off("messageSeen", onMessageSeen);
      }

      socket.disconnect();
    };
  }, [onNewMessage, onTyping, onMessageSeen]);

  const joinConversation = (payload: JoinConversationPayload) => {
    socket.emit("joinConversation", payload);
  };

  const sendMessage = (payload: SendMessagePayload) => {
    socket.emit("sendMessage", payload);
  };

  const typingStart = (payload: TypingPayload) => {
    socket.emit("typingStart", payload);
  };

  const typingStop = (payload: TypingPayload) => {
    socket.emit("typingStop", payload);
  };

  const markSeen = (payload: MarkSeenPayload) => {
    socket.emit("markSeen", payload);
  };

  const deleteForEveryone = (
    payload: DeleteForEveryonePayload
  ) => {
    socket.emit("deleteForEveryone", payload);
  };

  return {
    socket,
    joinConversation,
    sendMessage,
    typingStart,
    typingStop,
    markSeen,
    deleteForEveryone,
  };
};

export default useChatSocket;