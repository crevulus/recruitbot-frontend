import mixpanel from "mixpanel-browser";
import React from "react";
import { Hyperlinks, LocalStorageKeys } from "../../data/enums";
import { useLocalStorage } from "../../hooks/useLocalStorage";

import { CrossIcon } from "../Icons";

import {
  StyledCookieBanner,
  StyledCookieText,
  StyledCookieLink,
  StyledButtonsContainer,
  StyledCookieAccept,
  StyledCookieReject,
} from "./CookieBanner.styles";

export default function CookieBanner() {
  const { isValuePresent, handleAddBooleanToLocalStorage } = useLocalStorage(
    LocalStorageKeys.Cookies
  );

  const handleAccept = () => {
    handleAddBooleanToLocalStorage(LocalStorageKeys.Cookies, true);
    mixpanel.opt_in_tracking();
  };

  const handleReject = () => {
    handleAddBooleanToLocalStorage(LocalStorageKeys.Cookies, false);
  };

  return (
    <StyledCookieBanner $showBanner={!isValuePresent}>
      <StyledCookieText>
        This chatbot uses cookies to improve your experience. Click accept to
        agree to our use of cookies.{" "}
        <StyledCookieLink
          href={`${Hyperlinks.RecruitbotHome}?page_id=962`}
          target="_blank"
        >
          Privacy policy.
        </StyledCookieLink>
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
