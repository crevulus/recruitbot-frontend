import { lighten } from "polished";
import styled from "styled-components";
import Button from "../extendable/Button";

export const StyledMessgeContainer = styled.div`
  display: flex !important;
  flex-direction: column !important;
`;

const StyledMessage = styled.p`
  display: inline-block !important;
  border-radius: 20px !important;
  padding: 10px 15px !important;
  box-shadow: ${(props) => props.theme.lightShadow} !important;
  color: ${(props) => props.theme.white} !important;
`;

export const StyledChatbotMessage = styled(StyledMessage)`
  align-self: flex-start !important;
  margin: 10px 0 !important;
  background: ${(props) => props.theme.primary} !important;
`;

export const StyledUserMessage = styled(StyledMessage)`
  align-self: flex-end !important;
  margin: 20px 0 !important;
  background: ${(props) => props.theme.darkGrey} !important;
`;

export const StyledButtonsContainer = styled.div`
  display: flex !important;
  flex-wrap: wrap !important;
  gap: 10px !important;
`;

export const StyledAnswerButton = styled(Button)`
  border: 2px solid ${(props) => props.theme.primary} !important;
  border-radius: 20px !important;
  padding: 5px 15px !important;
  transition: all 0.25s ease !important;

  &:hover,
  &:focus {
    background: ${(props) => lighten(0.1, props.theme.primary)} !important;
    border: 2px solid ${(props) => lighten(0.1, props.theme.primary)} !important;
    color: ${(props) => props.theme.white} !important;
    transform: scale(1.1) !important;
  }
`;
