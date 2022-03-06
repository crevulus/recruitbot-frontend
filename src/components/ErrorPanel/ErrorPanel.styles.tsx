import { size } from "polished";
import styled from "styled-components";

export const StyledErrorPanel = styled.div`
  &&& {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
  }
`;

export const StyledErrorMessage = styled.div`
  &&& {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ${size("70%")};
    border-radius: 10px;
    background: #ff5964;
    color: ${(props) => props.theme.white};
  }
`;

export const StyledIconContainer = styled.figure`
  &&& {
    display: flex;
    justify-self: end;
    align-items: center;
    justify-content: center;
    width: 15px;
    height: 15px;

    svg {
      width: 100%;
      max-height: 100%;
      path {
        fill: ${(props) => props.theme.white};
      }
    }
  }
`;
