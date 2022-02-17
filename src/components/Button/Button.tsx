import React, { ReactNode } from "react";

import { StyledButton } from "./Button.styles";

type ButtonPropsType = {
  children: ReactNode;
  [key: string]: unknown;
};

export default function Button({ children, ...props }: ButtonPropsType) {
  return <StyledButton {...props}>{children}</StyledButton>;
}
