import styled from "styled-components";

export const StyledFABContainer = styled.div`
  z-index: 100000;
  position: fixed;
  display: flex;
  align-items: center;
  gap: 10px;
  bottom: 30px;
  right: 30px;
`;

export const StyledFABButton = styled.button`
  z-index: 1000;
  border: none;
  border-radius: 50%;
  box-shadow: ${(props) => props.theme.lightShadow};
  height: 75px;
  width: 75px;
  background: ${(props) => props.theme.primary};

  &:hover {
    cursor: pointer;
  }
`;

export const StyledIconWrapper = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 5px;
  height: 100%;
  width: 100%;
`;

export const StyledFABMessageWrapper = styled.div`
  display: inline-block;
  border-radius: 20px;
  box-shadow: ${(props) => props.theme.lightShadow};
  height: 20px;
  width: auto;
  padding: 10px 20px;
  background: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.white};
  font-size: ${(props) => props.theme.fontRegular};
`;

export const StyledFABMessageContents = styled.div`
  display: inline-block;
  height: 100%;
  margin-right: -1em;
  padding-right: 1em;
  text-align: right;
  white-space: nowrap;
`;

export const StyledFABMessage = styled.span<{ $visible?: boolean }>`
  display: inline-block;
  direction: rtl;
  overflow: hidden;
  height: 100%;
  width: ${(props) => (props.$visible ? "100%" : "0%")};
  font-size: 18px;
  transition: width 1s;
`;
