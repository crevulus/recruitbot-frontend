import styled from "styled-components";

export const StyledChatBody = styled.div`
  &&& {
    padding: 15px 10px;
    background: ${(props) => props.theme.grey};
    overflow: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const StyledWarningContainer = styled.div`
  &&& {
    height: 100%;
    width: 100%;
  }
`;
