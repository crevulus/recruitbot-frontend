import React, { useContext, useEffect, useState } from "react";
import Perks from "../../Perks/Perks";

import { Message } from "../../";

import mockConversationData from "../../../mockConversationData.json";
import { AppContext } from "../../../store/AppContext";

import { StyledChatBody } from "./ChatBody.styles";

type AnswersType = {
  id: number;
  text: string;
};

type MessageType = {
  id: number;
  text: string;
  answers: AnswersType[] | string;
};

export enum SENDERS {
  Chatbot = "chatbot",
  User = "user",
}

function ChatBody() {
  const { setNeedsInputIndexes, setCurrentStep } = useContext(AppContext);
  const [showMessages, setShowMessages] = useState<{ [key: string]: boolean }>(
    {}
  );

  useEffect(() => {
    const needsInput: number[] = [];
    // iterate over conversation; reduce to object; set to true if msg0, else false.
    const messageVisibilityArray = mockConversationData.conversation.reduce(
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
    setShowMessages(messageVisibilityArray);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderNextMessage = (index: number) => {
    const next = index + 1;
    setShowMessages((prevState) => ({ ...prevState, [`msg${next}`]: true }));
    setCurrentStep(next);
  };

  return (
    <StyledChatBody>
      <Perks />
      {mockConversationData.conversation.map((item: MessageType, index) => {
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
