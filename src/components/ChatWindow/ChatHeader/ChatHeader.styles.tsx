import styled from "styled-components";

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
  width: 50px !important;
  height: 50px !important;
  color: ${(props) => props.theme.white} !important;
`;

export const StyledIconWrapper = styled.figure`
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  margin: 0 !important;
  padding: 5px !important;
  height: 100% !important;
  width: 100% !important;

  .cross-icon-path {
    fill: white !important;
    color: white !important;
  }
`;
