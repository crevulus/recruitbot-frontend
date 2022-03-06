import styled from "styled-components";

export const StyledButton = styled.button`
  &&& {
    border: none;
    box-shadow: ${(props) => props.theme.lightShadow};
    background: ${(props) => props.theme.white};
    color: ${(props) => props.theme.primary};

    &:hover,
    &:focus {
      * {
        cursor: pointer;
      }

      background: ${(props) => props.theme.primary};
      color: ${(props) => props.theme.white};
      transition: all 0.25s;
    }

    &:active {
      background: ${(props) => props.theme.white};
    }

    &:disabled,
    &:disabled * {
      background: ${(props) => props.theme.grey};
      color: ${(props) => props.theme.darkGrey};
      box-shadow: none;
      &:hover {
        cursor: not-allowed;
      }
    }
  }
`;
