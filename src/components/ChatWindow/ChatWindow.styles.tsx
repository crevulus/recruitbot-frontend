import styled from "styled-components";
import { zIndex } from "../../styles/zIndex";

export const StyledChatWindow = styled.div<{ $showChat: boolean }>`
  z-index: ${zIndex("chat-window")} !important;
  position: absolute !important;
  display: grid !important;
  grid-template-rows: 12.5% 75% 12.5% !important;
  bottom: ${(props) => (props.$showChat ? "-20px" : "-100vh")} !important;
  right: -20px !important;
  height: 100vh !important;
  width: 100vw !important;
  max-height: ${(props) => (props.$showChat ? "100vh" : "0px")} !important;
  background: ${(props) => props.theme.white} !important;
  transition: all 1s cubic-bezier(0, 0, 0.56, 1.3) !important;
`;
