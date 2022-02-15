import React, { useEffect, useState, useContext } from "react";
import {
  StyledFABButton,
  StyledFABContainer,
  StyledIconWrapper,
  StyledFABMessageWrapper,
  StyledFABMessageContents,
  StyledFABMessage,
} from "./FAB.styles";
import { BriefcaseIcon } from "../Icons/BriefcaseIcon";
import { AppContext } from "../../store/AppContext";

export default function FAB() {
  const [showMessage, setShowMessage] = useState(false);
  const { showChat, setShowChat } = useContext(AppContext);

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
    setShowMessage(false);
  }, [showChat]);

  const handleClickFAB = () => {
    setShowMessage(false);
    setShowChat(!showChat);
  };

  return (
    <StyledFABContainer $hidden={showChat}>
      <StyledFABMessageWrapper
        $visible={showMessage}
        aria-label="Open Recruitbot"
        data-testid="fab-message-wrapper"
      >
        <StyledFABMessageContents>
          <StyledFABMessage $visible={showMessage}>
            Considering a career in nursing? Join our team!&lrm;
          </StyledFABMessage>
        </StyledFABMessageContents>
      </StyledFABMessageWrapper>
      <StyledFABButton onClick={handleClickFAB}>
        <StyledIconWrapper>
          <BriefcaseIcon />
        </StyledIconWrapper>
      </StyledFABButton>
    </StyledFABContainer>
  );
}
