import styled from "styled-components";
import { zIndex } from "../../styles/zIndex";

export const StyledChatWindow = styled.div<{ $showChat: boolean }>`
  z-index: ${zIndex("chat-window")} !important;
  position: absolute !important;
  bottom: -20px !important;
  right: -20px !important;
  height: 100vh !important;
  width: 100vw !important;
  max-height: ${(props) => (props.$showChat ? "100vh" : "0px")} !important;
  background: ${(props) => props.theme.white} !important;
  transition: max-height 1s cubic-bezier(0, 0, 0.56, 1.3) !important;
`;

export const StyledChatHeaderContainer = styled.div`
  display: flex !important;
  justify-content: space-between !important;
  background: ${(props) => props.theme.primary} !important;
  color: ${(props) => props.theme.white} !important;
`;

export const StyledChatHeader = styled.p`
  margin: 0 !important;
  padding: 5px !important;
`;

export const StyledCloseButton = styled.button`
  margin: 0 !important;
  padding: 5px !important;
  border: none !important;
  box-shadow: none !important;
  background: none !important;
  color: ${(props) => props.theme.white} !important;
`;
