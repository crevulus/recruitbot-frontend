import React, { useContext, useEffect, useState, useRef } from "react";

import { AppContext } from "../../../data/AppContext";
import { ConversationType } from "../../../data/types";
import isEmpty from "../../../utils/isEmpty";

import { Perks, Message, LoadingSpinner, ErrorPanel } from "../../";

import { StyledChatBody, StyledWarningContainer } from "./ChatBody.styles";
import { LoadingSpinnerTypes } from "../../../data/enums";

function ChatBody() {
  const { setNeedsInputIndexes, setCurrentStep, showChat, fetchResults } =
    useContext(AppContext);
  const [showMessages, setShowMessages] = useState<{ [key: string]: boolean }>(
    {}
  );
  const chatBodyRef = useRef<HTMLDivElement>(null);

  const { data, isLoading, error, errorMsg } = fetchResults;

  useEffect(() => {
    if (isEmpty(data)) {
      return;
    }
    // check if chat is open and if showMessages has already been calc'd; if not, run the operation
    if (showChat && isEmpty(showMessages)) {
      const needsInput: number[] = [];
      // iterate over conversation; reduce to object; set to true if msg0, else false.
      const messageVisibilityTree = data.conversation.reduce(
        (acc, item, index) => {
          if (typeof item.answers === "string") {
            needsInput.push(index);
          }
          const key = `msg${index}`;
          return { ...acc, [key]: index ? false : true };
        },
        {}
      );
      setNeedsInputIndexes(needsInput);
      setShowMessages(messageVisibilityTree);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showChat, data]);

  const renderNextMessage = (index: number) => {
    const next = index + 1;
    setShowMessages((prevState) => ({ ...prevState, [`msg${next}`]: true }));
    setCurrentStep(next);
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
            showMessages[`msg${index}`] && (
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
