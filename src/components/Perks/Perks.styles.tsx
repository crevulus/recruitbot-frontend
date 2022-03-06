import styled from "styled-components";

export const StyledPerksContainer = styled.div`
  &&& {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin: 10px 0;
  }
`;

export const StyledPerk = styled.span`
  &&& {
    border-radius: 20px;
    box-shadow: ${(props) => props.theme.lightShadow};
    padding: 5px 15px;
    background: ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.white};
  }
`;
