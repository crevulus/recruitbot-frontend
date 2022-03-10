import styled from "styled-components";
import { lighten } from "polished";
import Button from "../../extendable/Button";
import { device } from "../../../styles/styledComponentUtilities";

export const StyledChatFooter = styled.form`
  &&& {
    position: relative;
    display: grid;
    grid-template-columns: 80% 20%;

    @media ${device.tablet} {
      border-radius: 0 0 2px 0;
    }
  }
`;

export const StyledInput = styled.input`
  &&& {
    height: 100%;
    border: none;
    padding: 0 10px;
    &:disabled {
      cursor: not-allowed;
    }

    @media ${device.tablet} {
      border-radius: 0 20px;
    }
  }
`;

export const StyledButtonsContainer = styled.div<{ $disabled: boolean }>`
  &&& {
    display: grid;
    grid-template-rows: 1fr 25%;
    align-items: center;
    justify-content: center;
    border-radius: 0px 0px 2px 0px;
    background: ${(props) => !props.$disabled && props.theme.secondary};
  }
`;

export const StyledButton = styled(Button)`
  &&& {
    justify-self: center;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    width: 50px;
    height: 50px;
    border: 2px solid ${(props) => props.theme.primary};
    border-radius: 50%;
    background: ${(props) => props.theme.white};
    transition: all 0.25s ease;

    &:hover,
    &:focus {
      background: ${(props) => lighten(0.1, props.theme.primary)};
      border: 2px solid ${(props) => lighten(0.1, props.theme.primary)};
      transform: scale(1.1);

      svg {
        path {
          fill: ${(props) => props.theme.white};
        }
      }
    }

    svg {
      width: 16px;
      height: 16px;

      path {
        fill: ${(props) => props.theme.primary};
      }
    }

    &:disabled {
      border: none;
      background: ${(props) => props.theme.grey};

      svg {
        path {
          fill: ${(props) => props.theme.darkGrey};
          transform: none;
        }
      }
    }
  }
`;

export const StyledLink = styled.a`
  &&& {
    height: 100%;
  }
`;

export const StyledLogoWrapper = styled.div`
  &&& {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    text-align: center;
    background: ${(props) => props.theme.secondary};

    &:hover {
      cursor: pointer;
    }

    @media ${device.tablet} {
      border-radius: 0 0 2px 0;
    }
  }
`;

export const StyledLogo = styled.img`
  &&& {
    max-width: 95%;
  }
`;
