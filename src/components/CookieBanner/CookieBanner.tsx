import React, { useState } from "react";

import { CrossIcon } from "../Icons";

import {
  StyledCookieBanner,
  StyledCookieText,
  StyledButtonsContainer,
  StyledCookieAccept,
  StyledCookieReject,
} from "./CookieBanner.styles";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(true);

  const handleAccept = () => {
    setShowBanner(false);
  };

  const handleReject = () => {
    setShowBanner(false);
  };

  return (
    <StyledCookieBanner $showBanner={showBanner}>
      <StyledCookieText>
        This website uses cookies to improve your experience.
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
