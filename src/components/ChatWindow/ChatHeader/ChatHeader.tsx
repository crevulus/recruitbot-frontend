import React, { useContext } from "react";
import { AppContext } from "../../../store/AppContext";

import { StyledIconWrapper } from "../../FAB/FAB.styles";
import { CrossIcon } from "../../Icons/CrossIcon";

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
