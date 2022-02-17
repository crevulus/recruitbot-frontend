import React, { useContext } from "react";
import { AppContext } from "../../../store/AppContext";

import { CrossIcon } from "../../Icons";

import { StyledIconWrapper } from "../../FAB/FAB.styles"; // TODO: Create own icon wrapper
import {
  StyledChatHeader,
  StyledChatHeaderContainer,
  StyledCloseButton,
} from "./ChatHeader.styles";

import mockConversationData from "../../../mockConversationData.json";

function ChatHeader() {
  const { showChat, setShowChat } = useContext(AppContext);
  return (
    <StyledChatHeaderContainer>
      <StyledChatHeader>{mockConversationData.cta}</StyledChatHeader>
      <StyledCloseButton
        onClick={() => setShowChat(!showChat)}
        aria-label="close recruitbot"
      >
        <StyledIconWrapper>
          <CrossIcon />
        </StyledIconWrapper>
      </StyledCloseButton>
    </StyledChatHeaderContainer>
  );
}

export default ChatHeader;
