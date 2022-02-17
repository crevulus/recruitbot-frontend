import React, { useEffect, useState } from "react";
import Perks from "../../Perks/Perks";

import { StyledChatBody } from "./ChatBody.styles";

import mockConversationData from "../../../mockConversationData.json";
import Message from "../../Message/Message";

type AnswersType = {
  id: number;
  text: string;
};

type MessageType = {
  id: number;
  text: string;
  answers: AnswersType[];
};

function ChatBody() {
  const [showMessages, setShowMessages] = useState<{ [key: string]: boolean }>(
    {}
  );

  useEffect(() => {
    // iterate over conversation; reduce to object; set to true if msg0, else false.
    const messageVisibilityArray = mockConversationData.conversation.reduce(
      (acc, _, index) => {
        const key = `msg${index}`;
        return { ...acc, [key]: index ? false : true };
      },
      {}
    );
    setShowMessages(messageVisibilityArray);
  }, []);

  const renderNextMessage = (index: number) => {
    const next = index + 1;
    setShowMessages((prevState) => ({ ...prevState, [`msg${next}`]: true }));
  };

  return (
    <StyledChatBody>
      <Perks />
      {mockConversationData.conversation.map((item: MessageType, index) => {
        return (
          showMessages[`msg${index}`] && (
            <Message
              key={item.id}
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
