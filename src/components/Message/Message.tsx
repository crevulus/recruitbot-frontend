import React, { useEffect, useState } from "react";

function Message({ showNext, message, index }: any) {
  const [showMessage, setShowMessage] = useState(false);

  const hasAnswers = message.answers.length > 0;

  useEffect(() => {
    const CTATimer = setTimeout(() => {
      setShowMessage((prevState) => !prevState);
      if (!hasAnswers) {
        handleNext();
      }
    }, 1500);
    return () => {
      clearTimeout(CTATimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {}, []);

  const handleNext = () => {
    showNext(index);
  };

  if (!showMessage) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div onClick={handleNext}>{message.text}</div>
      {hasAnswers &&
        message.answers.map((answer: any) => (
          <button key={answer.id} onClick={handleNext}>
            {answer.text}
          </button>
        ))}
    </>
  );
}

export default Message;
