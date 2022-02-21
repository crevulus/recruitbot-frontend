import styled from "styled-components";

export const StyledButton = styled.button`
  border: none !important;
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
    transition: all 0.25s !important;
  }

  &:active {
    background: ${(props) => props.theme.white} !important;
  }

  &:disabled,
  &:disabled * {
    background: ${(props) => props.theme.grey} !important;
    color: ${(props) => props.theme.darkGrey} !important;
    box-shadow: none !important;
    &:hover {
      cursor: not-allowed !important;
    }
  }
`;
