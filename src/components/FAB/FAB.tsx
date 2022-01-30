import React from "react";
import BriefcaseSvg from "../../assets/briefcase.svg";
import {
  StyledFABButton,
  StyledFABContainer,
  StyledFABMessage,
} from "./FAB.styles";

export default function FAB() {
  return (
    <StyledFABContainer>
      <StyledFABButton>
        <img src={BriefcaseSvg} alt="work icon" />
      </StyledFABButton>
    </StyledFABContainer>
  );
}
