import styled from "styled-components";

export const StyledFABContainer = styled.div``;

export const StyledFABButton = styled.button`
  position: absolute;
  bottom: 30px;
  right: 30px;
  z-index: 2000000;
  border: none;
  border-radius: 50%;
  background-color: ${(props) => props.theme.primary};

  &:hover {
    cursor: pointer;
  }
`;

export const StyledFABMessage = styled.span``;
