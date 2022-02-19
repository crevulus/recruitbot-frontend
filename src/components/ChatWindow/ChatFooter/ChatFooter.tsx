import React, { FormEvent, useContext, useState } from "react";
import { Button } from "../..";
import { AppContext } from "../../../data/AppContext";
import { StyledChatFooter, StyledInput } from "./ChatFooter.styles";

function ChatFooter() {
  const { setReplies, currentStep, needsInputIndexes, isLoadingMessage } =
    useContext(AppContext);
  const [value, setValue] = useState("");

  const submitAnswer = (event: FormEvent) => {
    event.preventDefault();
    setReplies((prevState) => [...prevState, value]);
    setValue("");
  };

  const disabled = isLoadingMessage || !needsInputIndexes.includes(currentStep);

  return (
    <StyledChatFooter onSubmit={submitAnswer}>
      <StyledInput
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
