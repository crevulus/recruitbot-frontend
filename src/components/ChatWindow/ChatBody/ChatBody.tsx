import React, { useContext, useRef } from "react";

import { AppContext } from "../../../data/AppContext";
import { ConversationType } from "../../../data/types";
import isEmpty from "../../../utils/isEmpty";

import { Perks, Message, LoadingSpinner, ErrorPanel } from "../../";

import { StyledChatBody, StyledWarningContainer } from "./ChatBody.styles";
import { LoadingSpinnerTypes } from "../../../data/enums";
import { useShowMessages } from "../../../hooks/useShowMessages";

function ChatBody() {
  const { fetchResults } = useContext(AppContext);
  const chatBodyRef = useRef<HTMLDivElement>(null);

  const { data, isLoading, error, errorMsg } = fetchResults;

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
    }, 100);
    setTimeout(() => {
      if (chatBodyRef.current) {
        chatBodyRef.current.scrollTo({
          top: chatBodyRef.current.scrollHeight,
          behavior: "smooth",
        });
      }
    }, 1600);
  };

  if (error) {
    return (
      <StyledChatBody>
        <StyledWarningContainer>
          {/* @ts-ignore */}
          <ErrorPanel>{errorMsg}</ErrorPanel>
        </StyledWarningContainer>
      </StyledChatBody>
    );
  }

  if (isLoading) {
    return (
      <StyledChatBody>
        <StyledWarningContainer>
          <LoadingSpinner variant={LoadingSpinnerTypes.Fetching} />
        </StyledWarningContainer>
      </StyledChatBody>
    );
  }

  if (error) {
    return <StyledChatBody>{errorMsg}</StyledChatBody>;
  }

  return (
    <StyledChatBody ref={chatBodyRef}>
      {!isEmpty(fetchResults) && <Perks perks={data.perks} />}
      {!isEmpty(data) &&
        data.conversation.map((item: ConversationType, index) => {
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
