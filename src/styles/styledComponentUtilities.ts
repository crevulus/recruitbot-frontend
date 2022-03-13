import styled, { createGlobalStyle } from "styled-components";
import { cleanSlateRules } from "./cleanslate";
import { zIndex } from "./zIndex";

export const theme = {
  primary: "#31c04d",
  secondary: "#304857",
  warning: "ff5964",
  white: "#fff",
  grey: "#EBEBEB",
  darkGrey: "#A1A1A1",

  fontRegular: "16px",
  fontLarge: "20px",

  lightShadow: "1px 1px 4px #777",
  lightTextShadow: "1px 1px 4px #999",
  mediumShadow: "3px 3px 17px #777",
  verticalShadow: "1px 1px 4px #777",
};

enum screenSizes {
  mobileS = "320px",
  mobileM = "375px",
  mobileL = "425px",
  tablet = "768px",
  laptop = "1024px",
  laptopL = "1440px",
  desktop = "2560px",
}

export const device = {
  mobileS: `(min-width: ${screenSizes.mobileS})`,
  mobileM: `(min-width: ${screenSizes.mobileM})`,
  mobileL: `(min-width: ${screenSizes.mobileL})`,
  tablet: `(min-width: ${screenSizes.tablet})`,
  laptop: `(min-width: ${screenSizes.laptop})`,
  laptopL: `(min-width: ${screenSizes.laptopL})`,
  desktop: `(min-width: ${screenSizes.desktop})`,
  desktopL: `(min-width: ${screenSizes.desktop})`,
};

export const GlobalStyles = createGlobalStyle`
  .recruitbot-widget {
    ${cleanSlateRules}
  }
`;

// can't use createGlobalStyle to protect client sites
export const StyledApplication = styled.main`
  &&& {
    z-index: ${zIndex("default")};
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    font-size: 18px;
    position: fixed;
    bottom: 20px;
    right: 20px;

    input,
    button,
    textarea,
    select {
      font: inherit;
    }

    @media (prefers-reduced-motion: reduce) {
      html:focus-within {
        scroll-behavior: auto;
      }

      *,
      *::before,
      *::after {
        animation-duration: 0.01ms;
        animation-iteration-count: 1;
        transition-duration: 0.01ms;
        scroll-behavior: auto;
      }
    }
  }
`;
