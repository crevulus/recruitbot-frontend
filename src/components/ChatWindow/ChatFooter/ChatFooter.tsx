import React, { FormEvent, useContext, useState } from "react";

import { AppContext } from "../../../data/AppContext";
import useFetch, { FetchTypes } from "../../../hooks/useFetch";

import { Button } from "../..";

import { StyledChatFooter, StyledInput } from "./ChatFooter.styles";

function ChatFooter() {
  const {
    setReplies,
    currentStep,
    needsInputIndexes,
    isLoadingMessage,
    setPayload,
    payload,
    fetchResults,
  } = useContext(AppContext);
  const { executeFetch } = useFetch({
    url: "http://localhost:8000/submissions",
    type: FetchTypes.Post,
  });
  const [value, setValue] = useState("");

  const submitAnswer = (event: FormEvent) => {
    event.preventDefault();
    if (validateInput()) {
      const key = fetchResults.data.conversation[currentStep].key;
      const data = { ...payload, [key]: value };
      setPayload(data);
      setReplies((prevState) => [...prevState, value]);
      setValue("");
      if (currentStep === fetchResults.data.conversation.length - 2) {
        executeFetch({
          method: FetchTypes.Post,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
      }
    }
  };

  const validateInput = () => {
    if (value.length === 0) {
      return false;
    }
    return true;
  };

  const disabled = isLoadingMessage || !needsInputIndexes.includes(currentStep);

  return (
    <StyledChatFooter onSubmit={submitAnswer}>
      <StyledInput
        required
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
