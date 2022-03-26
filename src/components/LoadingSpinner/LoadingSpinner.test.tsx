import React from "react";
import { screen } from "@testing-library/react";
import { LoadingSpinnerTypes } from "../../data/enums";
import { customRender } from "../../utils/test-utils";
import LoadingSpinner from "./LoadingSpinner";

describe("LoadingSpinner", () => {
  it("should render LoadingSpinner without error", () => {
    customRender(<LoadingSpinner variant={LoadingSpinnerTypes.Fetching} />, {});
    const loadingSpinner = screen.getByTestId(/loading/i);
    expect(loadingSpinner).toBeInTheDocument();
  });
});
