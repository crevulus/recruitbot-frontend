import { createContext, Dispatch, SetStateAction } from "react";

type AppContextType = {
  showChat: boolean;
  setShowChat: Dispatch<SetStateAction<boolean>>;
  isLoadingMessage: boolean;
  setIsLoadingMessage: Dispatch<SetStateAction<boolean>>;
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
  replies: string[];
  setReplies: Dispatch<SetStateAction<string[]>>;
  needsInputIndexes: number[];
  setNeedsInputIndexes: Dispatch<SetStateAction<number[]>>;
};

export const AppContext = createContext({} as AppContextType);
