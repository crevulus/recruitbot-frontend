import React, { useState } from "react";

import { ThemeProvider } from "styled-components";
import {
  theme,
  StyledApplication,
  GlobalStyles,
} from "./styles/styledComponentUtilities";

import FAB from "./components/FAB/FAB";
import ChatWindow from "./components/ChatWindow/ChatWindow";
import { AppContext } from "./store/AppContext";

function App() {
  const [showChat, setShowChat] = useState(false);

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
