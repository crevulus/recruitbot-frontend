import React from "react";

import { LoadingSpinnerTypes } from "../../data/enums";

import { StyledLoadingSpinner, StyledCircle } from "./LoadingSpinner.styles";

type LoadingSpinnerPropsType = {
  variant: LoadingSpinnerTypes;
};

export default function LoadingSpinner({ variant }: LoadingSpinnerPropsType) {
  return (
    <StyledLoadingSpinner
      $variant={variant}
      aria-busy="true"
      data-testid="Loading"
    >
      <StyledCircle $start={0}></StyledCircle>
      <StyledCircle $start={0.2}></StyledCircle>
      <StyledCircle $start={0.4}></StyledCircle>
    </StyledLoadingSpinner>
  );
}
