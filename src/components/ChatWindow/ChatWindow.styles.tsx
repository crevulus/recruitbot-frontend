import styled from "styled-components";
import { device } from "../../styles/styledComponentUtilities";
import { zIndex } from "../../styles/zIndex";

export const StyledChatWindow = styled.div<{ $showChat: boolean }>`
  &&& {
    z-index: ${zIndex("chat-window")};
    position: absolute;
    display: grid;
    grid-template-rows: 12.5% 75% 12.5%;
    bottom: ${(props) => (props.$showChat ? "-20px" : "-100vh")};
    right: -20px;
    height: 100vh;
    width: 100vw;
    max-height: ${(props) => (props.$showChat ? "100vh" : "0px")};
    background: ${(props) => props.theme.white};
    transition: all 1s cubic-bezier(0, 0, 0.56, 1.3);

    @media ${device.tablet} {
      bottom: ${(props) => (props.$showChat ? "20px" : "-100vh")};
      right: 20px;
      border-radius: 20px 20px 0 20px;
      box-shadow: ${(props) => props.theme.mediumShadow};
      width: 400px;
      max-height: 700px;
    }
  }
`;
