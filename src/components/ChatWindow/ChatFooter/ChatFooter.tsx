import React, { FormEvent, useContext, useState } from "react";

import { AppContext } from "../../../data/AppContext";
import useFetch, { ROOT_API_URL } from "../../../hooks/useFetch";

import { SendIcon } from "../../Icons";
import RecruitbotLogoPng from "../../../assets/RecruitbotLogo.png";

import {
  StyledChatFooter,
  StyledInput,
  StyledButtonsContainer,
  StyledButton,
  StyledLink,
  StyledLogoWrapper,
  StyledLogo,
} from "./ChatFooter.styles";
import {
  Endpoints,
  FetchTypes,
  Hyperlinks,
  LocalStorageKeys,
} from "../../../data/enums";
import CookieBanner from "../../CookieBanner";
import { useLocalStorage } from "../../../hooks/useLocalStorage";

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
    url: `${ROOT_API_URL}/${Endpoints.Submissions}`,
    type: FetchTypes.Post,
  });
  const [value, setValue] = useState("");
  const { valueIsPresent } = useLocalStorage(LocalStorageKeys.Cookies);

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

  const disabled =
    isLoadingMessage ||
    !needsInputIndexes.includes(currentStep) ||
    !valueIsPresent;

  return (
    <StyledChatFooter onSubmit={submitAnswer}>
      <StyledInput
        required
        name="chatFooter"
        id="chat-footer"
        placeholder={disabled ? "" : "Type your answer here"}
        value={value}
        disabled={disabled}
        onChange={(event) => setValue(event.target.value)}
      />
      <StyledButtonsContainer $disabled={disabled}>
        <StyledButton type="submit" disabled={disabled} aria-label="Submit">
          <SendIcon />
        </StyledButton>
        <StyledLink
          href={Hyperlinks.RecruitbotHome}
          target="_blank"
          rel="noreferrer"
        >
          <StyledLogoWrapper>
            <StyledLogo src={RecruitbotLogoPng} alt="Recruitbot" />
          </StyledLogoWrapper>
        </StyledLink>
      </StyledButtonsContainer>
      {!valueIsPresent && <CookieBanner />}
    </StyledChatFooter>
  );
}

export default ChatFooter;
