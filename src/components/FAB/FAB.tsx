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

export default function FAB() {
  const [showMessage, setShowMessage] = useState(false);
  const { showChat, setShowChat, fetchResults } = useContext(AppContext);

  useEffect(() => {
    const CTATimer = setTimeout(
      () => setShowMessage((prevState) => !prevState),
      100
    );
    return () => {
      clearTimeout(CTATimer);
    };
  }, []);

  useEffect(() => {
    setShowMessage(false);
  }, [showChat]);

  const handleClickFAB = () => {
    setShowMessage(false);
    setShowChat(!showChat);
  };

  return (
    <StyledFABContainer $hidden={showChat}>
      {!isEmpty(fetchResults) && (
        <StyledFABMessageWrapper
          $visible={showMessage}
          data-testid="fab-message-wrapper"
        >
          <StyledFABMessageContents>
            <StyledFABMessage $visible={showMessage}>
              {fetchResults.data.cta}&lrm;
            </StyledFABMessage>
          </StyledFABMessageContents>
        </StyledFABMessageWrapper>
      )}
      <StyledFABButton aria-label="Open Recruitbot" onClick={handleClickFAB}>
        <StyledIconWrapper>
          <BriefcaseIcon />
        </StyledIconWrapper>
      </StyledFABButton>
    </StyledFABContainer>
  );
}
