import styled from "styled-components";

export const StyledFABContainer = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
`;

export const StyledFABButton = styled.button`
  z-index: 1000;
  border: none;
  border-radius: 50%;
  height: 75px;
  width: 75px;
  background-color: ${(props) => props.theme.primary};

  &:hover {
    cursor: pointer;
  }

  svg {
    transform: translate(8px, 8px);
  }
`;

export const StyledFABMessageWrapper = styled.div`
  display: inline-block;
  border-radius: 20px;
  height: 20px;
  width: auto;
  padding: 10px;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.white};
`;

export const StyledFABMessageContents = styled.div`
  display: inline-block;
  white-space: nowrap;
  margin-right: -1em;
  padding-right: 1em;
  text-align: right;
`;

export const StyledFABMessage = styled.div<{ $visible?: boolean }>`
  display: inline-block;
  direction: rtl;
  overflow: hidden;
  width: ${(props) => (props.$visible ? "100%" : "0%")};
  transition: width 1s;
`;
