import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

import { AppContext } from "./data/AppContext";
import useFetch, { ROOT_API_URL } from "./hooks/useFetch";
import { FetchResultsType } from "./data/types";
import { Endpoints, FetchTypes } from "./data/enums";

import { FAB, ChatWindow } from "./components";

import {
  theme,
  StyledApplication,
  GlobalStyles,
} from "./styles/styledComponentUtilities";

type AppPropsType = {
  domElement?: Element;
};

function App({ domElement }: AppPropsType) {
  const accountNumber = domElement?.getAttribute(
    "data-recruitbot-account-number"
  );

  const openWidget =
    new URLSearchParams(window.location.search)
      .get("openWidget")
      ?.toLowerCase() === "true";
  const response = useFetch({
    url: `${ROOT_API_URL}/${Endpoints.Accounts}/${accountNumber}`,
    type: FetchTypes.Get,
  });

  const { data, error, errorMsg, isLoading } = response;

  const [showChat, setShowChat] = useState(openWidget);
  const [isLoadingMessage, setIsLoadingMessage] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [replies, setReplies] = useState<string[]>([]);
  const [payload, setPayload] = useState<{ [key: string]: unknown }>({});
  const [needsInputIndexes, setNeedsInputIndexes] = useState<number[]>([]);
  const [fetchResults, setFetchResults] = useState({} as FetchResultsType);

  useEffect(() => {
    setFetchResults(response);
    // using a primitive (cta) to use as a flag to check for the whole data changing.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, error, errorMsg, isLoading]);

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
            payload,
            setPayload,
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
