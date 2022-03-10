import React from "react";
import { LocalStorageKeys } from "../../data/enums";
import { useLocalStorage } from "../../hooks/useLocalStorage";

import { CrossIcon } from "../Icons";

import {
  StyledCookieBanner,
  StyledCookieText,
  StyledButtonsContainer,
  StyledCookieAccept,
  StyledCookieReject,
} from "./CookieBanner.styles";

export default function CookieBanner() {
  const { valueIsPresent, handleAddBooleanToLocalStorage } = useLocalStorage(
    LocalStorageKeys.Cookies
  );

  const handleAccept = () => {
    handleAddBooleanToLocalStorage(LocalStorageKeys.Cookies, true);
  };

  const handleReject = () => {
    handleAddBooleanToLocalStorage(LocalStorageKeys.Cookies, false);
  };

  return (
    <StyledCookieBanner $showBanner={!valueIsPresent}>
      <StyledCookieText>
        This chatbot uses cookies to improve your experience.
      </StyledCookieText>
      <StyledButtonsContainer>
        <StyledCookieReject onClick={handleReject}>
          <CrossIcon />
        </StyledCookieReject>
        <StyledCookieAccept onClick={handleAccept}>Accept</StyledCookieAccept>
      </StyledButtonsContainer>
    </StyledCookieBanner>
  );
}
