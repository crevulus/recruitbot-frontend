import React, { ReactNode } from "react";
import { WarningIcon } from "../Icons";

import {
  StyledErrorMessage,
  StyledErrorPanel,
  StyledIconContainer,
} from "./ErrorPanel.styles";

type ErrorPanelPropsType = {
  children: ReactNode;
};

export default function ErrorPanel({
  children,
}: ErrorPanelPropsType): ReactNode {
  return (
    <StyledErrorPanel>
      <StyledErrorMessage>
        <StyledIconContainer>
          <WarningIcon />
        </StyledIconContainer>
        <p>{children}</p>
      </StyledErrorMessage>
    </StyledErrorPanel>
  );
}
