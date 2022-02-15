import React, { useContext } from "react";

import { AppContext } from "../../store/AppContext";
import ChatBody from "./ChatBody/ChatBody";
import ChatFooter from "./ChatFooter/ChatFooter";
import ChatHeader from "./ChatHeader/ChatHeader";

import { StyledChatWindow } from "./ChatWindow.styles";

export default function ChatWindow() {
  const { showChat } = useContext(AppContext);
  return (
    <StyledChatWindow $showChat={showChat} data-testid="chat-window">
      <ChatHeader />
      <ChatBody />
      <ChatFooter />
    </StyledChatWindow>
  );
}
