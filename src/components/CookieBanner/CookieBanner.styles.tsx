import { lighten } from "polished";
import styled from "styled-components";
import { device } from "../../styles/styledComponentUtilities";
import { zIndex } from "../../styles/zIndex";
import Button from "../extendable/Button";

export const StyledCookieBanner = styled.div<{ $showBanner: boolean }>`
  &&& {
    position: absolute;
    z-index: ${zIndex("overlay")};
    display: flex;
    flex-direction: column;
    max-height: ${(props) => (props.$showBanner ? "100%" : "0")};
    height: 100%;
    width: 100%;
    background: ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.white};
    transition: max-height 0.5s 0.5s ease;

    @media ${device.tablet} {
      border-radius: 0 0 2px 20px;
    }

    * {
      opacity: ${(props) => (props.$showBanner ? "100%" : "0%")};
      transition: opacity 0.5s ease;
    }
  }
`;

export const StyledCookieText = styled.p`
  &&& {
    margin: 10px;
  }
`;

export const StyledButtonsContainer = styled.div`
  &&& {
    position: absolute;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 10px;
    bottom: 10px;
    right: 10px;
    align-self: flex-end;
  }
`;

export const StyledCookieAccept = styled(Button)`
  &&& {
    padding: 5px 10px;
    background: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.white};

    &:hover,
    &:focus {
      background: ${(props) => lighten(0.1, props.theme.primary)};
      transform: scale(1.1);
    }
  }
`;

export const StyledCookieReject = styled(Button)`
  &&& {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid rgb(255, 255, 255, 0);
    border-radius: 50%;
    padding: 7px;
    box-shadow: none;
    background: none;
    width: 15px;
    height: 15px;

    svg {
      .cross-icon-path {
        fill: ${(props) => props.theme.grey};
      }
    }

    &:hover,
    &:focus {
      background: none;
      border: 2px solid ${(props) => props.theme.grey};
    }
  }
`;
