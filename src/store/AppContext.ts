import { createContext, Dispatch, SetStateAction } from "react";

type AppContextType = {
  showChat: boolean;
  setShowChat: Dispatch<SetStateAction<boolean>>;
};

export const AppContext = createContext({} as AppContextType);
