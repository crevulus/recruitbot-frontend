import styled from "styled-components";
import { zIndex } from "../../styles/zIndex";

export const StyledFABContainer = styled.div<{ $hidden: boolean }>`
  z-index: ${zIndex("default")} !important;
  position: absolute !important;
  bottom: ${(props) => (props.$hidden ? "-130px" : "0")} !important;
  right: 0 !important;
  display: flex !important;
  align-items: center !important;
  max-width: calc(100vw - 40px) !important; // 20px left and right
  gap: 10px !important;
  width: max-content !important;
  transition: bottom 0.25s !important;
`;

export const StyledFABButton = styled.button`
  z-index: ${zIndex("default")} !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  margin: 0 !important;
  padding: 5px !important;
  min-height: 60px !important;
  min-width: 60px !important;
  border: none !important;
  border-radius: 50% !important;
  box-shadow: ${(props) => props.theme.lightShadow} !important;
  background: ${(props) => props.theme.primary} !important;
  transition: background 0.25s !important;

  figure {
    transition: transform 0.25s !important;
  }

  &:hover,
  &:focus {
    * {
      cursor: pointer !important;
    }

    /*  TODO: Bring back lighten */
    transition: background 0.25s !important;

    figure {
      transform: scale(0.9) !important;
      transition: transform 0.25s ease !important;
    }
  }

  &:active {
    background: ${(props) => props.theme.primary} !important;
  }
`;

export const StyledIconWrapper = styled.figure`
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  margin: 0 !important;
  padding: 5px !important;
  height: 100% !important;
  width: 100% !important;
`;

export const StyledFABMessageWrapper = styled.div<{ $visible?: boolean }>`
  display: inline-block !important;
  border-radius: 20px !important;
  box-shadow: ${(props) => props.theme.lightShadow} !important;
  max-height: 40px !important;
  width: auto !important;
  padding: 10px 20px !important;
  background: ${(props) => props.theme.primary} !important;
  color: ${(props) => props.theme.white} !important;
  font-size: ${(props) => props.theme.fontRegular} !important;
  opacity: ${(props) => (props.$visible ? "100%" : "0%")} !important;
  transition: opacity 1s ease-in !important; ;
`;

export const StyledFABMessageContents = styled.div`
  display: inline-block !important;
  height: 100% !important;
  margin-right: -1em !important;
  padding-right: 1em !important;
  text-align: right !important;
  white-space: nowrap !important; ;
`;

export const StyledFABMessage = styled.span<{ $visible?: boolean }>`
  display: inline-block !important;
  direction: rtl !important;
  overflow: hidden !important;
  height: 100% !important;
  width: ${(props) => (props.$visible ? "100%" : "0%")} !important;
  font-size: 18px !important;
  transition: width 1s 1s !important;
`;
