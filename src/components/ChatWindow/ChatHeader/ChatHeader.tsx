import React, { useContext } from "react";

import { AppContext } from "../../../data/AppContext";
import isEmpty from "../../../utils/isEmpty";

import { CrossIcon } from "../../Icons";

import {
  StyledChatHeader,
  StyledChatHeaderContainer,
  StyledCloseButton,
} from "./ChatHeader.styles";

function ChatHeader() {
  const { showChat, setShowChat, fetchResults } = useContext(AppContext);
  return (
    <StyledChatHeaderContainer>
      {!isEmpty(fetchResults.data) && (
        <StyledChatHeader>{fetchResults.data.cta}</StyledChatHeader>
      )}
      <StyledCloseButton
        onClick={() => setShowChat(!showChat)}
        aria-label="close recruitbot"
      >
        <CrossIcon />
      </StyledCloseButton>
    </StyledChatHeaderContainer>
  );
}

export default ChatHeader;
