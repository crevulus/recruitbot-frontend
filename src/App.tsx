import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

import { AppContext } from "./data/AppContext";

import { FAB, ChatWindow } from "./components";

import {
  theme,
  StyledApplication,
  GlobalStyles,
} from "./styles/styledComponentUtilities";
import useFetch from "./hooks/useFetch";
import { FetchResultsType } from "./data/types";

function App() {
  const openWidget =
    new URLSearchParams(window.location.search)
      .get("openWidget")
      ?.toLowerCase() === "true";
  const response = useFetch({ url: "/mockConversationData.json" });

  const [showChat, setShowChat] = useState(openWidget);
  const [isLoadingMessage, setIsLoadingMessage] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [replies, setReplies] = useState<string[]>([]);
  const [needsInputIndexes, setNeedsInputIndexes] = useState<number[]>([]);
  const [fetchResults, setFetchResults] = useState({} as FetchResultsType);

  useEffect(() => {
    setFetchResults(response);
    // using a primitive (cta) to use as a flag to check for the whole data changing.
  }, [response.data.cta]);

  return (
    <StyledApplication>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <AppContext.Provider
          value={{
            showChat,
            setShowChat,
            isLoadingMessage,
            setIsLoadingMessage,
            currentStep,
            setCurrentStep,
            replies,
            setReplies,
            needsInputIndexes,
            setNeedsInputIndexes,
            fetchResults,
            setFetchResults,
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
