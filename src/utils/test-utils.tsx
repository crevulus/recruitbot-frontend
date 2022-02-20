import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/styledComponentUtilities";
import { AppContext } from "../data/AppContext";
import { FetchResultsType } from "../data/types";

export const baseMockContext = {
  showChat: false,
  setShowChat: jest.fn(),
  isLoadingMessage: false,
  setIsLoadingMessage: jest.fn(),
  currentStep: 0,
  setCurrentStep: jest.fn(),
  replies: ["test1", "test2"],
  setReplies: jest.fn(),
  payload: {},
  setPayload: jest.fn(),
  needsInputIndexes: [1, 2],
  setNeedsInputIndexes: jest.fn(),
  fetchResults: {} as FetchResultsType,
  setFetchResults: jest.fn(),
};

export const customRender = (
  ui: any,
  { contextProps = baseMockContext, ...renderOptions }: any
) => {
  return render(
    <ThemeProvider theme={theme}>
      <AppContext.Provider value={contextProps}>{ui}</AppContext.Provider>
    </ThemeProvider>,
    renderOptions
  );
};

export * from "@testing-library/react";
