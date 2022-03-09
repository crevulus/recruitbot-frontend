import { lighten } from "polished";
import styled from "styled-components";
import Button from "../extendable/Button";

export const StyledMessageContainer = styled.div`
  &&& {
    display: flex;
    flex-direction: column;
  }
`;

const StyledMessage = styled.span`
  &&& {
    display: inline-block;
    padding: 10px 15px;
    box-shadow: ${(props) => props.theme.lightShadow};
    color: ${(props) => props.theme.white};
  }
`;

export const StyledLoaderContainer = styled(StyledMessage)`
  &&& {
    border-radius: 2px 20px 20px 20px;
    background: ${(props) => props.theme.primary};
  }
`;

export const StyledChatbotMessage = styled(StyledMessage)`
  &&& {
    align-self: flex-start;
    border-radius: 2px 20px 20px 20px;
    margin: 10px 0;
    background: ${(props) => props.theme.primary};
  }
`;

export const StyledUserMessage = styled(StyledMessage)`
  &&& {
    align-self: flex-end;
    border-radius: 20px 2px 20px 20px;
    margin: 20px 0;
    background: ${(props) => props.theme.darkGrey};
  }
`;

export const StyledButtonsContainer = styled.div`
  &&& {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
`;

export const StyledAnswerButton = styled(Button)`
  &&& {
    border: 2px solid ${(props) => props.theme.primary};
    border-radius: 20px;
    padding: 5px 15px;
    transition: all 0.25s ease;

    &:hover,
    &:focus {
      background: ${(props) => lighten(0.1, props.theme.primary)};
      border: 2px solid ${(props) => lighten(0.1, props.theme.primary)};
      color: ${(props) => props.theme.white};
      transform: scale(1.1);

      &:disabled {
        background: none;
        color: ${(props) => props.theme.darkGrey};
        transform: none;
      }
    }

    &:disabled {
      border: 2px solid ${(props) => props.theme.darkGrey};
    }
  }
`;
