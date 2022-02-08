import styled from "styled-components";

export const StyledFABContainer = styled.div`
  z-index: 100000;
  position: fixed;
  bottom: 3rem;
  right: 3rem;
`;

export const StyledFABButton = styled.button`
  z-index: 1000;
  border: none;
  border-radius: 50%;
  height: 7.5rem;
  width: 7.5rem;
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
  border-radius: 2rem;
  height: 2rem;
  width: auto;
  padding: 1rem;
  /* background-color: ${(props) => props.theme.primary}; */
  background-color: red;
  color: ${(props) => props.theme.white};
  font-size: ${(props) => props.theme.fontRegular};
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
