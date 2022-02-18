import React, { FormEvent, useContext, useState } from "react";
import { AppContext } from "../../../store/AppContext";
import { StyledChatFooter } from "./ChatFooter.styles";

function ChatFooter() {
  const { setReplies, currentStep, needsInputIndexes } = useContext(AppContext);
  const [value, setValue] = useState("");

  const submitAnswer = (event: FormEvent) => {
    event.preventDefault();
    setReplies((prevState) => [...prevState, value]);
  };

  return (
    <StyledChatFooter onSubmit={submitAnswer}>
      <input
        type="text"
        name="chatFooter"
        id="chat-footer"
        placeholder="type your answer here"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button type="submit" disabled={!needsInputIndexes.includes(currentStep)}>
        Submit
      </button>
    </StyledChatFooter>
  );
}

export default ChatFooter;
