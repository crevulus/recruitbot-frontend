import React from "react";

import { StyledLoadingSpinner, StyledCircle } from "./LoadingSpinner.styles";

type LoadingSpinnerPropsType = {
  variant: string;
};

export default function LoadingSpinner({ variant }: LoadingSpinnerPropsType) {
  return (
    <StyledLoadingSpinner $variant={variant}>
      <StyledCircle $start={0}></StyledCircle>
      <StyledCircle $start={0.2}></StyledCircle>
      <StyledCircle $start={0.4}></StyledCircle>
    </StyledLoadingSpinner>
  );
}
