import { lighten } from "polished";
import styled from "styled-components";
import { device } from "../../styles/styledComponentUtilities";
import { zIndex } from "../../styles/zIndex";
import Button from "../extendable/Button";

export const StyledCookieBanner = styled.div<{ $showBanner: boolean }>`
  &&& {
    position: absolute;
    z-index: ${zIndex("overlay")};
    display: grid;
    grid-template-columns: 66% 34%;
    align-items: center;
    max-height: ${(props) => (props.$showBanner ? "100%" : "0")};
    height: 100%;
    width: 100%;
    background: ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.white};
    transition: max-height 0.5s ${(props) => !props.$showBanner && "0.5s"};

    @media ${device.tablet} {
      border-radius: 0 0 2px 20px;
    }

    * {
      opacity: ${(props) => (props.$showBanner ? "100%" : "0%")};
      transition: opacity 0.5s ${(props) => props.$showBanner && "0.5s"};
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
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`;

export const StyledCookieAccept = styled(Button)`
  &&& {
    border-radius: 20px;
    padding: 5px 15px;
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
    padding: 5px;
    box-shadow: none;
    background: none;
    width: 15px;
    height: 15px;

    svg {
      .cross-icon-path {
        fill: ${(props) => props.theme.darkGrey};
      }
    }

    &:hover,
    &:focus {
      background: none;
      border: 2px solid ${(props) => props.theme.darkGrey};
    }
  }
`;
