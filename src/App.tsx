import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import { AppContext } from "./store/AppContext";

import { FAB, ChatWindow } from "./components";

import {
  theme,
  StyledApplication,
  GlobalStyles,
} from "./styles/styledComponentUtilities";

function App() {
  const openWidget =
    new URLSearchParams(window.location.search)
      .get("openWidget")
      ?.toLowerCase() === "true";
  const [showChat, setShowChat] = useState(openWidget);
  const [currentStep, setCurrentStep] = useState(0);
  const [replies, setReplies] = useState<string[]>([]);
  const [needsInputIndexes, setNeedsInputIndexes] = useState<number[]>([]);

  return (
    <StyledApplication>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <AppContext.Provider
          value={{
            showChat,
            setShowChat,
            currentStep,
            setCurrentStep,
            replies,
            setReplies,
            needsInputIndexes,
            setNeedsInputIndexes,
          }}
        >
          <FAB />
          <ChatWindow />
        </AppContext.Provider>
      </ThemeProvider>
    </StyledApplication>
  );
}

export default App;
