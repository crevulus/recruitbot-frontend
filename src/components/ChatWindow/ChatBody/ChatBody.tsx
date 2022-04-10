//@ts-nocheck
import React, { useContext, useRef } from "react";

import { AppContext } from "../../../data/AppContext";
import { ConversationType } from "../../../data/types";
import isEmpty from "../../../utils/isEmpty";

import { Perks, Message, LoadingSpinner, ErrorPanel } from "../../";

import { StyledChatBody, StyledWarningContainer } from "./ChatBody.styles";
import { LoadingSpinnerTypes } from "../../../data/enums";
import { useShowMessages } from "../../../hooks/useShowMessages";

const SHOW_LOADER_TIMEOUT = 100;
const SHOW_MSG_TIMEOUT = 1600;

function ChatBody() {
  const { introductionData, conversationData } = useContext(AppContext);
  const chatBodyRef = useRef<HTMLDivElement>(null);

  const { visibilityTree, showNextMessage } = useShowMessages();

  const renderNextMessage = (index: number) => {
    showNextMessage(index);
    // first setTimeout to show loader; second setTimeout to show chat message
    setTimeout(() => {
      if (chatBodyRef.current) {
        chatBodyRef.current.scrollTo({
          top: chatBodyRef.current.scrollHeight,
          behavior: "smooth",
        });
      }
    }, SHOW_LOADER_TIMEOUT);
    setTimeout(() => {
      if (chatBodyRef.current) {
        chatBodyRef.current.scrollTo({
          top: chatBodyRef.current.scrollHeight,
          behavior: "smooth",
        });
      }
    }, SHOW_MSG_TIMEOUT);
  };

  if (introductionData.error || conversationData.error) {
    return (
      <StyledChatBody>
        <StyledWarningContainer>
          {/* @ts-ignore */}
          <ErrorPanel>
            {introductionData.errorMsg || conversationData.errorMsg}
          </ErrorPanel>
        </StyledWarningContainer>
      </StyledChatBody>
    );
  }

  if (introductionData.isLoading || conversationData.isLoading) {
    return (
      <StyledChatBody>
        <StyledWarningContainer>
          <LoadingSpinner variant={LoadingSpinnerTypes.Fetching} />
        </StyledWarningContainer>
      </StyledChatBody>
    );
  }

  return (
    <StyledChatBody ref={chatBodyRef}>
      {!isEmpty(introductionData.data) && (
        <Perks perks={introductionData.data.perks} />
      )}
      {!isEmpty(conversationData.data) &&
        conversationData.data.map((item: ConversationType, index: number) => {
          return (
            visibilityTree[`msg${index}`] && (
              <Message
                key={`message-${item.id}`}
                showNext={renderNextMessage}
                message={item}
                index={index}
              />
            )
          );
        })}
    </StyledChatBody>
  );
}

export default ChatBody;
