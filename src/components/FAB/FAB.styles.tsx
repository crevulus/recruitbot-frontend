import styled from "styled-components";

export const StyledFABContainer = styled.div`
  z-index: 1000000;
`;

export const StyledFABButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 2000000;
  border: none;
  border-radius: 50%;
  background-color: ${(props) => props.theme.secondary};

  &:hover {
    cursor: pointer;
  }
`;

export const StyledFABMessage = styled.span``;
