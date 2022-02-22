import styled from "styled-components";

export const StyledPerksContainer = styled.div`
  display: flex !important;
  flex-wrap: wrap !important;
  gap: 10px !important;
  margin: 10px 0 !important;
`;

export const StyledPerk = styled.span`
  border-radius: 20px !important;
  box-shadow: ${(props) => props.theme.lightShadow} !important;
  padding: 5px 15px !important;
  background: ${(props) => props.theme.secondary} !important;
  color: ${(props) => props.theme.white} !important;
`;
