import React, { useContext } from "react";

import { AppContext } from "../../store/AppContext";

import {
  StyledChatWindow,
  StyledChatHeader,
  StyledChatHeaderContainer,
  StyledCloseButton,
} from "./ChatWindow.styles";

export default function ChatWindow() {
  const { showChat, setShowChat } = useContext(AppContext);
  return (
    <StyledChatWindow $showChat={showChat}>
      <StyledChatHeaderContainer>
        <StyledChatHeader>
          Considering a career in nursing? Join our team!
        </StyledChatHeader>
        <StyledCloseButton onClick={() => setShowChat(!showChat)}>
          X
        </StyledCloseButton>
      </StyledChatHeaderContainer>
    </StyledChatWindow>
  );
}
