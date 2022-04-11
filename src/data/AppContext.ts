import { createContext, Dispatch, SetStateAction } from "react";
import { FetchResultsType } from "./types";

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
  fetchResults: FetchResultsType;
  setFetchResults: Dispatch<SetStateAction<FetchResultsType>>;
};

export const AppContext = createContext({} as AppContextType);
