import { useContext } from "react";

import { AppContext } from "../../../data/AppContext";
import isEmpty from "../../../utils/isEmpty";

import { CrossIcon } from "../../Icons";

import {
  StyledChatHeader,
  StyledChatHeaderContainer,
  StyledCloseButton,
} from "./ChatHeader.styles";

function ChatHeader() {
  const { showChat, setShowChat, introductionData } = useContext(AppContext);
  return (
    <StyledChatHeaderContainer>
      {!isEmpty(introductionData.data) && (
        <StyledChatHeader>{introductionData.data.cta}</StyledChatHeader>
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
