import React, { useContext } from "react";

import { AppContext } from "../../../data/AppContext";
import isEmpty from "../../../utils/isEmpty";

import { CrossIcon } from "../../Icons";

import { StyledIconWrapper } from "../../FAB/FAB.styles"; // TODO: Create own icon wrapper
import {
  StyledChatHeader,
  StyledChatHeaderContainer,
  StyledCloseButton,
} from "./ChatHeader.styles";

function ChatHeader() {
  const { showChat, setShowChat, fetchResults } = useContext(AppContext);
  return (
    <StyledChatHeaderContainer>
      {!isEmpty(fetchResults) && (
        <StyledChatHeader>{fetchResults.data.cta}</StyledChatHeader>
      )}
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
