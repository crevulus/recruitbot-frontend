import React, { useEffect, useState, useContext } from "react";

import { AppContext } from "../../data/AppContext";
import { AnswersType } from "../../data/types";
import isEmpty from "../../utils/isEmpty";

import {
  StyledButtonsContainer,
  StyledChatbotMessage,
  StyledMessgeContainer,
  StyledUserMessage,
  StyledAnswerButton,
} from "./Message.styles";

export enum ANSWERS_TYPE {
  FreeForm = "input",
}

function Message({ showNext, message, index }: any) {
  const {
    needsInputIndexes,
    replies,
    setIsLoadingMessage,
    setPayload,
    payload,
  } = useContext(AppContext);
  const [showMessage, setShowMessage] = useState(false);
  const [answer, setAnswer] = useState<AnswersType>({} as AnswersType);

  const isMultipleChoice =
    Array.isArray(message.answers) && message.answers.length > 0;
  const isFreeForm = message.answers === ANSWERS_TYPE.FreeForm;

  const inputIndex = needsInputIndexes.indexOf(index);

  useEffect(() => {
    setIsLoadingMessage(true);
    const CTATimer = setTimeout(() => {
      setIsLoadingMessage(false);
      setShowMessage(true);
      if (isFreeForm && !replies[inputIndex]) {
        return;
      }
      if (!isMultipleChoice) {
        handleNext();
      }
    }, 1500);
    return () => {
      clearTimeout(CTATimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [replies]);

  const handleNext = (answer?: AnswersType) => {
    showNext(index);
    if (answer) {
      setAnswer(answer);
      setPayload({
        ...payload,
        [message.key]: answer.key,
      });
    }
  };

  if (!showMessage) {
    return <p>Loading...</p>;
  }

  return (
    <StyledMessgeContainer>
      <StyledChatbotMessage>{message.text}</StyledChatbotMessage>
      {isMultipleChoice && isEmpty(answer) && (
        <StyledButtonsContainer>
          {message.answers.map((answer: any) => (
            <StyledAnswerButton
              key={`button-${answer.id}`}
              onClick={() => handleNext(answer)}
            >
              {answer.text}
            </StyledAnswerButton>
          ))}
        </StyledButtonsContainer>
      )}
      {!isEmpty(answer) && <StyledUserMessage>{answer.text}</StyledUserMessage>}
      {replies[inputIndex] && (
        <StyledUserMessage>{replies[inputIndex]}</StyledUserMessage>
      )}
    </StyledMessgeContainer>
  );
}

export default Message;
