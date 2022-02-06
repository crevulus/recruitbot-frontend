import React from "react";

import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./styledComponentUtilities";

import FAB from "./components/FAB/FAB";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <FAB />
      </ThemeProvider>
    </div>
  );
}

export default App;
