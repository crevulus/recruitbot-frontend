import styled from "styled-components";

export const StyledChatFooter = styled.form`
  display: grid !important;
  grid-template-columns: 80% 20%;
`;

export const StyledInputWrapper = styled.div`
  position: relative !important;
  display: flex !important;
  flex-direction: column !important;
`;

export const StyledInput = styled.input`
  height: 100% !important;
  &:disabled {
    cursor: not-allowed !important;
  }
`;

export const StyledLogoWrapper = styled.div`
  position: absolute !important;
  bottom: 5px !important;
  right: 5px !important;
  max-height: 25px !important;
  max-width: 100px !important;
  opacity: 0.7 !important;
  transition: opacity 0.25s !important;

  &:hover {
    cursor: pointer !important;
    opacity: 1 !important;
  }
`;

export const StyledLogo = styled.img`
  width: 100% !important;
`;
