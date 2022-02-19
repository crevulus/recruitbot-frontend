import styled from "styled-components";

export const StyledChatFooter = styled.form`
  display: flex;
`;

export const StyledInput = styled.input`
  &:disabled {
    background: ${(props) => props.theme.grey} !important;
    cursor: not-allowed !important;
  }
`;
