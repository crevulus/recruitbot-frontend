import React, { useEffect, useState, MouseEvent, useContext } from "react";
import { Button } from "..";
import { AppContext } from "../../store/AppContext";
import {
  StyledButtonsContainer,
  StyledChatbotMessage,
  StyledMessgeContainer,
  StyledUserMessage,
} from "./Message.styles";

export enum ANSWERS_TYPE {
  FreeForm = "input",
}

function Message({ showNext, message, index, sender }: any) {
  const { needsInputIndexes, replies, setIsLoadingMessage } =
    useContext(AppContext);
  const [showMessage, setShowMessage] = useState(false);
  const [answer, setAnswer] = useState("");

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

  const handleNext = (event?: MouseEvent) => {
    showNext(index);
    if (event) {
      setAnswer((event.target as HTMLButtonElement).value);
    }
  };

  if (!showMessage) {
    return <p>Loading...</p>;
  }

  return (
    <StyledMessgeContainer>
      <StyledChatbotMessage onClick={handleNext}>
        {message.text}
      </StyledChatbotMessage>
      {isMultipleChoice && !answer && (
        <StyledButtonsContainer>
          {message.answers.map((answer: any) => (
            <Button
              key={`button-${answer.id}`}
              onClick={handleNext}
              value={answer.text}
            >
              {answer.text}
            </Button>
          ))}
        </StyledButtonsContainer>
      )}
      {answer && <StyledUserMessage>{answer}</StyledUserMessage>}
      {replies[inputIndex] && (
        <StyledUserMessage>{replies[inputIndex]}</StyledUserMessage>
      )}
    </StyledMessgeContainer>
  );
}

export default Message;
