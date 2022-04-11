//@ts-nocheck
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

  const introResponse = useFetch({
    url: `${ROOT_API_URL}/${Endpoints.Introduction}/${accountNumber}`,
    type: FetchTypes.Get,
  });
  const conversationResponse = useFetch({
    url: `${ROOT_API_URL}/${Endpoints.Conversation}/${accountNumber}`,
    type: FetchTypes.Get,
  });

  const [showChat, setShowChat] = useState(openWidget);
  const [isLoadingMessage, setIsLoadingMessage] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [replies, setReplies] = useState<string[]>([]);
  const [payload, setPayload] = useState<{ [key: string]: unknown }>({});
  const [needsInputIndexes, setNeedsInputIndexes] = useState<number[]>([]);
  const [introductionData, setIntroductionData] = useState({});
  const [conversationData, setConversationData] = useState({});

  useEffect(() => {
    setIntroductionData(introResponse);
    setConversationData(conversationResponse);
  }, [introResponse.data, conversationResponse.data]);

  return (
    <StyledApplication>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <AppContext.Provider
          value={{
            accountNumber,
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
            introductionData,
            conversationData,
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
