import React from "react";

import { ThemeProvider } from "styled-components";
import {
  theme,
  StyledApplication,
  GlobalStyles,
} from "./styles/styledComponentUtilities";

import FAB from "./components/FAB/FAB";

function App() {
  return (
    <StyledApplication>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <FAB />
      </ThemeProvider>
    </StyledApplication>
  );
}

export default App;
