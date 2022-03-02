import styled from "styled-components";
import { zIndex } from "../../../styles/zIndex";
import Button from "../../extendable/Button";

export const StyledChatHeaderContainer = styled.div`
  z-index: ${zIndex("chat-header")} !important;
  display: grid !important;
  grid-template-columns: 85% 15% !important;
  align-items: center !important;
  padding: 10px !important;
  max-width: 100% !important;
  box-shadow: ${(props) => props.theme.lightShadow} !important;
  background: ${(props) => props.theme.primary} !important;
  color: ${(props) => props.theme.white} !important;
`;

export const StyledChatHeader = styled.p`
  margin: 0 !important;
  padding: 5px !important;
  font-size: ${(props) => props.theme.fontLarge} !important;
  text-shadow: ${(props) => props.theme.lightTextShadow} !important;
`;

export const StyledCloseButton = styled(Button)`
  justify-self: end !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  margin: 0 !important;
  padding: 7px !important;
  border: 2px solid ${(props) => props.theme.white} !important;
  border-radius: 50% !important;
  box-shadow: none !important;
  background: none !important;
  width: 15px !important;
  height: 15px !important;

  svg {
    .cross-icon-path {
      fill: ${(props) => props.theme.white} !important;
    }
  }
`;
