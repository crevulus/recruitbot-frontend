import styled from "styled-components";
import { lighten } from "polished";
import { zIndex } from "../../styles/zIndex";
import Button from "../extendable/Button";

export const StyledFABContainer = styled.div<{ $hidden: boolean }>`
  &&& {
    z-index: ${zIndex("default")};
    position: absolute;
    bottom: ${(props) => (props.$hidden ? "-130px" : "0")};
    right: 0;
    display: flex;
    align-items: center;
    max-width: calc(100vw - 40px); // 20px left and right
    gap: 10px;
    width: max-content;
    transition: bottom 0.25s;
  }
`;

export const StyledFABButton = styled(Button)`
  &&& {
    z-index: ${zIndex("default")};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 5px;
    min-height: 60px;
    min-width: 60px;
    border: none;
    border-radius: 50%;
    box-shadow: ${(props) => props.theme.lightShadow};
    background: ${(props) => props.theme.primary};
    transition: background 0.25s;

    figure {
      transition: transform 0.25s;
    }

    &:hover,
    &:focus {
      * {
        cursor: pointer;
      }

      background: ${(props) => lighten(0.1, props.theme.primary)};
      transition: background 0.25s;

      figure {
        transform: scale(0.9);
        transition: transform 0.25s ease;
      }
    }

    &:active {
      background: ${(props) => props.theme.primary};
    }
  }
`;

export const StyledIconWrapper = styled.figure`
  &&& {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 5px;
    height: 100%;
    width: 100%;
  }
`;

export const StyledFABMessageWrapper = styled.div<{ $visible?: boolean }>`
  &&& {
    position: relative;
    float: right;
    border-radius: 20px;
    box-shadow: ${(props) =>
      props.$visible ? props.theme.lightShadow : "none"};
    max-height: 40px;
    width: 100%;
    padding: 10px 20px;
    background: transparent;
    color: ${(props) => props.theme.white};
    font-size: ${(props) => props.theme.fontRegular};
    overflow: hidden;
    transition: box-shadow 0.25s ${(props) => props.$visible && "0.5s"};

    &:before {
      content: ""; // need that in order to see a pseudo-element
      position: absolute;
      left: 0;
      top: 0;
      background-color: ${(props) => props.theme.primary};
      height: 100%;
      width: 100%;
      z-index: -1; // don't want it to show until we animate it in
      transform-origin: bottom left; // defines where transformation originates from (center by default)
      transform: ${(props) =>
        props.$visible ? "translateX(0)" : "translateX(35rem)"};
      transition: transform 0.5s ${(props) => !props.$visible && "0.5s"}; // transform should take 0.5s
    }
  }
`;

export const StyledFABMessageContents = styled.div`
  &&& {
    display: inline-flex;
    height: 100%;
    margin-right: -1em;
    padding-right: 1em;
    white-space: nowrap;
  }
`;

export const StyledFABMessage = styled.span<{ $visible?: boolean }>`
  &&& {
    display: inline-block;
    overflow: hidden;
    height: 100%;
    font-size: 18px;
    transform: ${(props) =>
      props.$visible ? "translateX(0)" : "translateX(35rem)"};
    transition: transform 1s ease-in 0.75s;
  }
`;
