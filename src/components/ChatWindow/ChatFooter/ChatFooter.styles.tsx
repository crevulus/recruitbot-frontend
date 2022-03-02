import styled from "styled-components";
import { lighten } from "polished";
import Button from "../../extendable/Button";

export const StyledChatFooter = styled.form`
  display: grid !important;
  grid-template-columns: 80% 20%;
`;

export const StyledInput = styled.input`
  height: 100% !important;
  border: none !important;
  padding: 0 10px !important;
  &:disabled {
    cursor: not-allowed !important;
  }
`;

export const StyledButtonsContainer = styled.div<{ $disabled: boolean }>`
  display: grid !important;
  grid-template-rows: 80% 20% !important;
  align-items: center !important;
  justify-content: center !important;
  background: ${(props) =>
    !props.$disabled && props.theme.secondary} !important;
`;

export const StyledButton = styled(Button)`
  justify-self: center !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  margin: 0 !important;
  padding: 0 !important;
  width: 50px !important;
  height: 50px !important;
  border: 2px solid ${(props) => props.theme.primary} !important;
  border-radius: 50% !important;
  background: ${(props) => props.theme.white} !important;
  transition: all 0.25s ease !important;

  &:hover,
  &:focus {
    background: ${(props) => lighten(0.1, props.theme.primary)} !important;
    border: 2px solid ${(props) => lighten(0.1, props.theme.primary)} !important;
    transform: scale(1.1) !important;

    svg {
      path {
        fill: ${(props) => props.theme.white} !important;
      }
    }
  }

  svg {
    width: 16px !important;
    height: 16px !important;

    path {
      fill: ${(props) => props.theme.primary} !important;
    }
  }

  &:disabled {
    border: none !important;
    background: ${(props) => props.theme.grey} !important;

    svg {
      path {
        fill: ${(props) => props.theme.darkGrey} !important;
        transform: none !important;
      }
    }
  }
`;

export const StyledLogoWrapper = styled.div`
  max-height: 25px !important;
  width: 100% !important;
  text-align: center !important;
  background: ${(props) => props.theme.secondary} !important;

  &:hover {
    cursor: pointer !important;
  }
`;

export const StyledLogo = styled.img`
  max-width: 95% !important;
`;
