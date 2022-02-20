import styled from "styled-components";
import { Button } from "../..";
import { lighten } from "polished";

export const StyledChatFooter = styled.form`
  display: grid !important;
  grid-template-columns: 80% 20%;
`;

export const StyledInput = styled.input`
  height: 100% !important;
  &:disabled {
    cursor: not-allowed !important;
  }
`;

export const StyledButtonsContainer = styled.div`
  display: grid !important;
  grid-template-rows: 80% 20% !important;
  align-items: center !important;
  justify-content: center !important;
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
  border-radius: 50% !important;
  background: ${(props) => props.theme.primary} !important;
  color: ${(props) => props.theme.white} !important;
  transition: all 0.25s ease !important;

  &:hover,
  &:focus {
    background: ${(props) => lighten(0.1, props.theme.primary)} !important;

    svg {
      path {
        transform: translate(-5%, -5%) scale(1.1) !important;
      }
    }
  }

  svg {
    width: 16px !important;
    height: 16px !important;

    path {
      fill: ${(props) => props.theme.white} !important;
    }
  }

  &:disabled {
    svg {
      path {
        fill: ${(props) => props.theme.darkGrey} !important;
      }
    }
  }
`;

export const StyledLogoWrapper = styled.div`
  max-height: 25px !important;
  max-width: 100px !important;
  opacity: 0.7 !important;
  transition: opacity 0.25s !important;

  &:hover {
    cursor: pointer !important;
    opacity: 1 !important;
  }
`;

export const StyledLogo = styled.img`
  width: 100% !important;
`;
