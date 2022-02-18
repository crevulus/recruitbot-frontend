import React, { FormEvent, useContext, useState } from "react";
import { Button } from "../..";
import { AppContext } from "../../../store/AppContext";
import { StyledChatFooter } from "./ChatFooter.styles";

function ChatFooter() {
  const { setReplies, currentStep, needsInputIndexes } = useContext(AppContext);
  const [value, setValue] = useState("");

  const submitAnswer = (event: FormEvent) => {
    event.preventDefault();
    setReplies((prevState) => [...prevState, value]);
    setValue("");
  };

  const disabled = !needsInputIndexes.includes(currentStep);

  return (
    <StyledChatFooter onSubmit={submitAnswer}>
      <input
        type="text"
        name="chatFooter"
        id="chat-footer"
        placeholder="type your answer here"
        value={value}
        disabled={disabled}
        onChange={(event) => setValue(event.target.value)}
      />
      <Button type="submit" disabled={disabled}>
        Submit
      </Button>
    </StyledChatFooter>
  );
}

export default ChatFooter;
