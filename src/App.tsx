import React, { useState } from "react";

import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

import FAB from "./components/FAB/FAB";
import { StyledTester } from "./App.styles";

function App() {
  const [openWidget] = useState(
    new URLSearchParams(window.location.search)
      .get("openWidget")
      ?.toLowerCase() === "true"
  );

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <FAB />
        {openWidget && <StyledTester>OK</StyledTester>}
      </ThemeProvider>
    </div>
  );
}

export default App;
