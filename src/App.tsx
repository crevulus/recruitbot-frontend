import React, { useState } from "react";

import { ThemeProvider } from "styled-components";
import {
  theme,
  StyledApplication,
  GlobalStyles,
} from "./styles/styledComponentUtilities";

import FAB from "./components/FAB/FAB";
import ChatWindow from "./components/ChatLayout/ChatWindow";
import { AppContext } from "./store/AppContext";

function App() {
  const openWidget =
    new URLSearchParams(window.location.search)
      .get("openWidget")
      ?.toLowerCase() === "true";
  const [showChat, setShowChat] = useState(openWidget);

  return (
    <StyledApplication>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <AppContext.Provider value={{ showChat, setShowChat }}>
          <FAB />
          <ChatWindow />
        </AppContext.Provider>
      </ThemeProvider>
    </StyledApplication>
  );
}

export default App;
