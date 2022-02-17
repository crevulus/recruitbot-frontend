import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/styledComponentUtilities";

const AllTheProviders = ({ children }: any) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
