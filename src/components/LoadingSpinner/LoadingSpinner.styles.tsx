import styled, { keyframes } from "styled-components";
import { size } from "polished";
import { LoadingSpinnerTypes } from "../../data/enums";

export const StyledLoadingSpinner = styled.div<{ $variant: string }>`
  &&& {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    padding: 5px;

    div:after {
      ${(props) =>
        size(props.$variant === LoadingSpinnerTypes.Writing ? "10px" : "20px")}
      background: ${(props) =>
        props.$variant === LoadingSpinnerTypes.Writing
          ? props.theme.white
          : props.theme.secondary};
    }
  }
`;

const loading = keyframes`
  0% {
    opacity: 0;
    transform: scale(1);
  }
  
  100% {
    opacity: 1;
    transform: scale(1.75);
  }
`;

export const StyledCircle = styled.div<{ $start: number }>`
  &&& {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    &:after {
      content: "";
      opacity: 0.5;
      border-radius: 50%;
      animation: ${loading} 0.8s ease-in-out infinite alternate;
      animation-delay: ${(props) => props.$start}s;
    }
  }
`;
