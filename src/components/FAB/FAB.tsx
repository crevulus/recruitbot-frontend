import React, { useEffect, useState } from "react";
import {
  StyledFABButton,
  StyledFABContainer,
  StyledFABMessageWrapper,
  StyledFABMessageContents,
  StyledFABMessage,
} from "./FAB.styles";
import { BriefcaseIcon } from "../Icons/BriefcaseIcon";

export default function FAB() {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowMessage(true), 5000);
  }, []);

  return (
    <StyledFABContainer>
      <StyledFABMessageWrapper>
        <StyledFABMessageContents>
          <StyledFABMessage $visible={showMessage}>
            TEST a career in nursing? Join our team!&lrm;
          </StyledFABMessage>
        </StyledFABMessageContents>
      </StyledFABMessageWrapper>
      <StyledFABButton>
        <BriefcaseIcon />
      </StyledFABButton>
    </StyledFABContainer>
  );
}
