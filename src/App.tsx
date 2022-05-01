import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

import { AppContext } from "./data/AppContext";
import { useFetch, ROOT_API_URL } from "./hooks/useFetch";
import { Endpoints, Environments, FetchTypes } from "./data/enums";

import { FAB, ChatWindow } from "./components";

import {
  theme,
  StyledApplication,
  GlobalStyles,
} from "./styles/styledComponentUtilities";
import {
  IntroductionDataType,
  ConversationDataType,
  FetchResultsType,
} from "./data/types";
import mixpanel from "mixpanel-browser";

type AppPropsType = {
  domElement?: Element;
};

const mixpanelInitOptions = {
  token:
    process.env.NODE_ENV === Environments.Prod
      ? process.env.REACT_APP_MP_PROD_PROJECT_TOKEN
      : process.env.REACT_APP_MP_DEV_PROJECT_TOKEN,
  options: {
    debug: process.env.NODE_ENV === Environments.Dev,
    opt_out_tracking_by_default: true,
    api_host: "https://api-eu.mixpanel.com",
  },
};

const openWidget =
  new URLSearchParams(window.location.search)
    .get("openWidget")
    ?.toLowerCase() === "true";

function App({ domElement }: AppPropsType) {
  const accountNumber =
    domElement?.getAttribute("data-recruitbot-account-number") ?? "";

  const introResponse = useFetch<IntroductionDataType>({
    url: `${ROOT_API_URL}/${Endpoints.Introduction}/${accountNumber}`,
    type: FetchTypes.Get,
  });
  const conversationResponse = useFetch<ConversationDataType[]>({
    url: `${ROOT_API_URL}/${Endpoints.Conversation}/${accountNumber}`,
    type: FetchTypes.Get,
  });

  const [showChat, setShowChat] = useState(openWidget);
  const [isLoadingMessage, setIsLoadingMessage] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [replies, setReplies] = useState<string[]>([]);
  const [payload, setPayload] = useState<{ [key: string]: unknown }>({});
  const [needsInputIndexes, setNeedsInputIndexes] = useState<number[]>([]);
  const [introductionData, setIntroductionData] = useState(
    {} as FetchResultsType<IntroductionDataType>
  );
  const [conversationData, setConversationData] = useState(
    {} as FetchResultsType<ConversationDataType[]>
  );

  useEffect(() => {
    setIntroductionData(introResponse);
    setConversationData(conversationResponse);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [introResponse.data, conversationResponse.data]);

  useEffect(() => {
    mixpanel.init(mixpanelInitOptions.token!, mixpanelInitOptions.options);
  }, []);

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
