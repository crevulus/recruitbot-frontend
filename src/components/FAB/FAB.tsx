import React, { useEffect, useState, useContext } from "react";

import { AppContext } from "../../data/AppContext";
import isEmpty from "../../utils/isEmpty";

import { BriefcaseIcon } from "../Icons";

import {
  StyledFABButton,
  StyledFABContainer,
  StyledIconWrapper,
  StyledFABMessageWrapper,
  StyledFABMessageContents,
  StyledFABMessage,
} from "./FAB.styles";

// a lot of timeout useEffects... Make it work, make it fast, make it right 🤷
export default function FAB() {
  const [showMessage, setShowMessage] = useState(false);
  const [mountMessage, setMountMessage] = useState(false);
  const { showChat, setShowChat, fetchResults } = useContext(AppContext);

  useEffect(() => {
    const CTATimer = setTimeout(
      () => setShowMessage((prevState) => !prevState),
      5000
    );
    return () => {
      clearTimeout(CTATimer);
    };
  }, []);

  useEffect(() => {
    const mountCTATimer = setTimeout(() => setMountMessage(true), 4000);
    return () => {
      clearTimeout(mountCTATimer);
    };
  }, []);

  useEffect(() => {
    setShowMessage(false);
    if (showChat) {
      const unmountCTATimer = setTimeout(() => setMountMessage(false), 2000);
      return () => {
        clearTimeout(unmountCTATimer);
      };
    }
  }, [showChat]);

  const handleClickFAB = () => {
    setShowMessage(false);
    setShowChat(!showChat);
  };

  return (
    <StyledFABContainer $hidden={showChat} $ctaVisible={showMessage}>
      {!isEmpty(fetchResults.data) && mountMessage && (
        <StyledFABMessageWrapper
          $visible={showMessage}
          data-testid="fab-message-wrapper"
        >
          <StyledFABMessageContents $visible={showMessage}>
            <StyledFABMessage $visible={showMessage}>
              {fetchResults.data.cta}
            </StyledFABMessage>
          </StyledFABMessageContents>
        </StyledFABMessageWrapper>
      )}
      <StyledFABButton aria-label="Open Recruitbot" onClick={handleClickFAB}>
        <StyledIconWrapper data-testid="breifcase-icon-wrapper">
          <BriefcaseIcon />
        </StyledIconWrapper>
      </StyledFABButton>
    </StyledFABContainer>
  );
}
