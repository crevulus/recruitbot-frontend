import React, { useEffect, useState, useContext } from "react";
import { LoadingSpinner } from "..";

import { AppContext } from "../../data/AppContext";
import { AnswerEntryTypes, LoadingSpinnerTypes } from "../../data/enums";
import { AnswersType, ConversationType } from "../../data/types";
import isEmpty from "../../utils/isEmpty";

import {
  StyledButtonsContainer,
  StyledChatbotMessage,
  StyledMessageContainer,
  StyledUserMessage,
  StyledAnswerButton,
  StyledLoaderContainer,
} from "./Message.styles";

type MessagePropsType = {
  showNext: (index: number) => void;
  message: ConversationType;
  index: number;
};

function Message({ showNext, message, index }: MessagePropsType) {
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
  const isFreeForm = message.answers === AnswerEntryTypes.FreeForm;

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
    return (
      <StyledLoaderContainer>
        <LoadingSpinner variant={LoadingSpinnerTypes.Writing} />
      </StyledLoaderContainer>
    );
  }

  return (
    <StyledMessageContainer>
      <StyledChatbotMessage>{message.text}</StyledChatbotMessage>
      {isMultipleChoice && isEmpty(answer) && (
        <StyledButtonsContainer>
          {Array.isArray(message.answers) &&
            message.answers.map((answer: AnswersType) => (
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
    </StyledMessageContainer>
  );
}

export default Message;
