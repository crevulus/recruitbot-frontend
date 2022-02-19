import React, { useContext, useEffect, useState } from "react";
import Perks from "../../Perks/Perks";

import { Message } from "../../";

import { AppContext } from "../../../data/AppContext";
import { ConversationType } from "../../../data/types";
import isEmpty from "../../../utils/isEmpty";

import { StyledChatBody } from "./ChatBody.styles";

export enum SENDERS {
  Chatbot = "chatbot",
  User = "user",
}

function ChatBody() {
  const { setNeedsInputIndexes, setCurrentStep, showChat, fetchResults } =
    useContext(AppContext);
  const [showMessages, setShowMessages] = useState<{ [key: string]: boolean }>(
    {}
  );

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
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{errorMsg}</h1>;
  }

  return (
    <StyledChatBody>
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
                sender={SENDERS.Chatbot}
              />
            )
          );
        })}
    </StyledChatBody>
  );
}

export default ChatBody;
