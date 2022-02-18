import styled from "styled-components";

export const StyledMessgeContainer = styled.div`
  display: flex !important;
  flex-direction: column !important;
`;

const StyledMessage = styled.p`
  display: inline-block !important;
  border-radius: 20px !important;
  padding: 5px 15px !important;
  box-shadow: ${(props) => props.theme.lightShadow} !important;
  color: ${(props) => props.theme.white} !important;
`;

export const StyledChatbotMessage = styled(StyledMessage)`
  align-self: flex-start !important;
  background: ${(props) => props.theme.primary} !important;
`;

export const StyledUserMessage = styled(StyledMessage)`
  align-self: flex-end !important;
  background: ${(props) => props.theme.darkGrey} !important;
`;
