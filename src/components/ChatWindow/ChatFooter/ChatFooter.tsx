import { FormEvent, useContext, useState } from "react";

import { AppContext } from "../../../data/AppContext";
import { useFetch, ROOT_API_URL } from "../../../hooks/useFetch";

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
import { useDeviceSize } from "../../../hooks/useDeviceSize";
import { sanitize } from "../../../utils/sanitize";

function ChatFooter() {
  const {
    accountNumber,
    setReplies,
    currentStep,
    needsInputIndexes,
    isLoadingMessage,
    setPayload,
    payload,
    conversationData,
  } = useContext(AppContext);
  const { executeFetch } = useFetch({
    url: `${ROOT_API_URL}/${Endpoints.Submissions}/${accountNumber}`,
    type: FetchTypes.Post,
  });
  const [value, setValue] = useState("");
  const { isValuePresent } = useLocalStorage(LocalStorageKeys.Cookies);
  const { isMobile } = useDeviceSize();

  const submitAnswer = (event: FormEvent) => {
    event.preventDefault();
    if (validateInput()) {
      const sanitizedValue = sanitize(value);
      const key = conversationData.data[currentStep].key;
      const data = { ...payload, [key]: sanitizedValue };
      setPayload(data);
      setReplies((prevState) => [...prevState, sanitizedValue]);
      setValue("");
      if (currentStep === conversationData.data.length - 2) {
        // @ts-ignore
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
    !isValuePresent;

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
        autoFocus={!isMobile}
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
      {!isValuePresent && <CookieBanner />}
    </StyledChatFooter>
  );
}

export default ChatFooter;
