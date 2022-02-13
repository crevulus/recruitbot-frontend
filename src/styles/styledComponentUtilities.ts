import styled, { createGlobalStyle } from "styled-components";
import { cleanSlateRules } from "./cleanslate";

export const theme = {
  primary: "#31c04d",
  white: "#fff",

  fontRegular: "16px",

  lightShadow: "1px 1px 4px #777",
};

export const GlobalStyles = createGlobalStyle`
  .recruitbot-widget {
    ${cleanSlateRules}
  }
`;

// can't use createGlobalStyle to protect client sites
export const StyledApplication = styled.main`
  margin: 0 !important;
  padding: 0 !important;
  font-family: Open-Sans, Helvetica, Sans-Serif !important;
  position: fixed !important;
  bottom: 20px !important;
  right: 20px !important;

  input,
  button,
  textarea,
  select {
    font: inherit !important;
  }

  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto !important;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;
