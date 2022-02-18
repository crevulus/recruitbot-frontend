import React, { useEffect, useState, MouseEvent, useContext } from "react";
import { Button } from "..";
import { AppContext } from "../../store/AppContext";

function Message({ showNext, message, index, sender }: any) {
  const { needsInputIndexes, replies } = useContext(AppContext);
  const [showMessage, setShowMessage] = useState(false);
  const [answer, setAnswer] = useState("");

  const hasAnswers =
    Array.isArray(message.answers) && message.answers.length > 0;

  const inputIndex = needsInputIndexes.indexOf(index);

  useEffect(() => {
    const CTATimer = setTimeout(() => {
      setShowMessage(true);
      if (!hasAnswers) {
        handleNext();
      }
    }, 1500);
    return () => {
      clearTimeout(CTATimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    <>
      <p onClick={handleNext}>{message.text}</p>
      {hasAnswers &&
        message.answers.map((answer: any) => (
          <Button
            key={`button-${answer.id}`}
            onClick={handleNext}
            value={answer.text}
          >
            {answer.text}
          </Button>
        ))}
      {answer && <p>{answer}</p>}
      {replies[inputIndex] && replies[inputIndex]}
    </>
  );
}

export default Message;
