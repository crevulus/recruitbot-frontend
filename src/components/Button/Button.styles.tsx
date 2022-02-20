import styled from "styled-components";

export const StyledButton = styled.button`
  box-shadow: ${(props) => props.theme.lightShadow} !important;
  background: ${(props) => props.theme.white} !important;
  color: ${(props) => props.theme.primary} !important;

  &:hover,
  &:focus {
    * {
      cursor: pointer !important;
    }

    background: ${(props) => props.theme.primary} !important;
    color: ${(props) => props.theme.white} !important;
    transition: background 0.25s !important;

    figure {
      transform: scale(0.9) !important;
      transition: transform 0.25s ease !important;
    }
  }

  &:active {
    background: ${(props) => props.theme.white} !important;
  }

  &:disabled {
    background: grey !important;
    color: darkgrey !important;
    &:hover {
      cursor: not-allowed !important;
    }
  }
`;
