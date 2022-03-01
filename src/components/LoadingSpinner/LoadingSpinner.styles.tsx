import styled, { keyframes } from "styled-components";
import { size } from "polished";

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
      ${(props) => size(props.$variant === "message" ? "10px" : "20px")}
      background: ${(props) =>
        props.$variant === "message"
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
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  height: 100% !important;

  &:after {
    content: "" !important;
    opacity: 0.5 !important;
    border-radius: 50% !important;
    animation: ${loading} 0.8s ease-in-out infinite alternate !important;
    animation-delay: ${(props) => props.$start}s !important;
  }
`;
