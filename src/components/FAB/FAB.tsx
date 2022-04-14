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

const CTA_ANIMATION_TIME = 1000;
const CTA_REVEAL_TIME = 5000;

// a lot of timeout useEffects... Make it work, make it fast, make it right 🤷
export default function FAB() {
  const [showCTA, setShowCTA] = useState(false);
  const [mountCTA, setMountCTA] = useState(false);
  const { showChat, setShowChat, introductionData } = useContext(AppContext);

  useEffect(() => {
    const CTATimer = setTimeout(
      () => setShowCTA((prevState) => !prevState),
      CTA_REVEAL_TIME
    );
    return () => {
      clearTimeout(CTATimer);
    };
  }, []);

  useEffect(() => {
    // mount just before animating
    const mountCTATimer = setTimeout(
      () => setMountCTA(true),
      CTA_REVEAL_TIME - 1000
    );
    return () => {
      clearTimeout(mountCTATimer);
    };
  }, []);

  useEffect(() => {
    if (showChat) {
      setShowCTA(false);
    }
    if (showChat || !showCTA) {
      // unmount jsut after animating
      const unmountCTATimer = setTimeout(
        () => setMountCTA(false),
        CTA_ANIMATION_TIME + 1
      );
      return () => {
        clearTimeout(unmountCTATimer);
      };
    }
  }, [showChat, showCTA]);

  const handleClickFAB = () => {
    setShowCTA(false);
    setShowChat(!showChat);
  };

  return (
    <StyledFABContainer $hidden={showChat} $ctaVisible={showCTA}>
      {!isEmpty(introductionData.data) && mountCTA && (
        <StyledFABMessageWrapper
          $visible={showCTA}
          data-testid="fab-message-wrapper"
        >
          <StyledFABMessageContents $visible={showCTA}>
            <StyledFABMessage $visible={showCTA}>
              {introductionData.data.cta}
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
