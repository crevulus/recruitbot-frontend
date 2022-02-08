import { createGlobalStyle } from "styled-components";

export const theme = {
  primary: "#31c04d",
  white: "#fff",
  fontRegular: "1.6rem",
};

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;
