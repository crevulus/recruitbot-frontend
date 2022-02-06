import { createGlobalStyle } from "styled-components";

export const theme = {
  primary: "#31c04d",
  white: "#fff",
};

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;
