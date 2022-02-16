import React from "react";

function Message({ showNext, message, index }: any) {
  const handleNext = () => {
    showNext(index);
  };
  return (
    <>
      <div onClick={handleNext}>{message.text}</div>
      {message.answers.length > 0 &&
        message.answers.map((answer: any) => (
          <button key={answer.id} onClick={handleNext}>
            {answer.text}
          </button>
        ))}
    </>
  );
}

export default Message;
