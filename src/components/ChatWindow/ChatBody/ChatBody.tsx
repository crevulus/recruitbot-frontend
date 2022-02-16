import React, { useState } from "react";
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
  const [showMessages, setShowMessages] = useState<{ [key: string]: boolean }>({
    msg0: true,
    msg1: false,
    msg2: false,
  });

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
