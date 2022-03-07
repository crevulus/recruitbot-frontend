import styled from "styled-components";
import { device } from "../../../styles/styledComponentUtilities";
import { zIndex } from "../../../styles/zIndex";
import Button from "../../extendable/Button";

export const StyledChatHeaderContainer = styled.div`
  &&& {
    z-index: ${zIndex("chat-header")};
    display: grid;
    grid-template-columns: 85% 15%;
    align-items: center;
    padding: 10px;
    max-width: 100%;
    box-shadow: ${(props) => props.theme.verticalShadow};
    background: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.white};

    @media ${device.tablet} {
      border-radius: 20px 20px 0 0;
    }
  }
`;

export const StyledChatHeader = styled.p`
  &&& {
    margin: 0;
    padding: 5px;
    font-size: ${(props) => props.theme.fontLarge};
    text-shadow: ${(props) => props.theme.lightTextShadow};
  }
`;

export const StyledCloseButton = styled(Button)`
  &&& {
    grid-column-start: 2;
    justify-self: end;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 7px;
    border: 2px solid ${(props) => props.theme.white};
    border-radius: 50%;
    box-shadow: none;
    background: none;
    width: 15px;
    height: 15px;

    svg {
      .cross-icon-path {
        fill: ${(props) => props.theme.white};
      }
    }
  }
`;
