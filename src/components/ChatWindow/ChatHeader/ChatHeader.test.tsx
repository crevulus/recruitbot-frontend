import React from "react";
import { screen } from "@testing-library/react";
import { baseMockContext, customRender } from "../../../utils/test-utils";
import ChatHeader from "./ChatHeader";

describe("ChatHeader: Starting state", () => {
  it("should render chat header close button", () => {
    customRender(<ChatHeader />, {});
    const button = screen.getByRole("button", { name: /close recruitbot/i });
    expect(button).toBeInTheDocument();
  });

  it("should render chat header cta", () => {
    const amendedMockContext = {
      ...baseMockContext,
      introductionData: {
        data: {
          cta: "This is a CTA",
        },
      },
    };
    customRender(<ChatHeader />, { contextProps: amendedMockContext });
    const cta = screen.getByText(/This is a CTA/i);
    expect(cta).toBeInTheDocument();
  });
});
