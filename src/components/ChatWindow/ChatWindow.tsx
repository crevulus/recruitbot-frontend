import React, { useContext } from "react";

import { AppContext } from "../../data/AppContext";

import { ChatBody, ChatHeader, ChatFooter } from "../";

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
