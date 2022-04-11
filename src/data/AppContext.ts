import { createContext, Dispatch, SetStateAction } from "react";
import {
  ConversationDataType,
  FetchResultsType,
  IntroductionDataType,
} from "./types";

export type AppContextType = {
  accountNumber: string;
  showChat: boolean;
  setShowChat: Dispatch<SetStateAction<boolean>>;
  isLoadingMessage: boolean;
  setIsLoadingMessage: Dispatch<SetStateAction<boolean>>;
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
  replies: string[];
  setReplies: Dispatch<SetStateAction<string[]>>;
  payload: { [key: string]: unknown };
  setPayload: Dispatch<SetStateAction<{ [key: string]: unknown }>>;
  needsInputIndexes: number[];
  setNeedsInputIndexes: Dispatch<SetStateAction<number[]>>;
  introductionData: FetchResultsType<IntroductionDataType>;
  conversationData: FetchResultsType<ConversationDataType[]>;
};

export const AppContext = createContext({} as AppContextType);
