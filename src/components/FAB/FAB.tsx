import React from "react";
import { StyledFABButton, StyledFABContainer } from "./FAB.styles";
import { BriefcaseIcon } from "../Icons/BriefcaseIcon";

export default function FAB() {
  return (
    <StyledFABContainer>
      <StyledFABButton>
        <BriefcaseIcon />
      </StyledFABButton>
    </StyledFABContainer>
  );
}
