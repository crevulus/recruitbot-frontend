import React from "react";
import { fireEvent, screen } from "@testing-library/react";
import { customRender, baseMockContext } from "../../../utils/test-utils";
import ChatFooter from "./ChatFooter";

describe("ChatFooter: Starting state", () => {
  it("should show basic elements", () => {
    customRender(<ChatFooter />, {});
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
    const submit = screen.getByRole("button", {
      name: /submit/i,
    });
    expect(submit).toBeInTheDocument();
    const img = screen.getByRole("img", {
      name: /recruitbot/i,
    });
    expect(img).toBeInTheDocument();
  });

  it("should disable the input and the button if the question isn't freeform", () => {
    const amendedMockContext = {
      ...baseMockContext,
      needsInputIndexes: [1, 2],
      currentStep: 3,
    };
    customRender(<ChatFooter />, { contextProps: amendedMockContext });
    const input = screen.getByRole("textbox");
    expect(input).toBeDisabled();
    const submit = screen.getByRole("button", {
      name: /submit/i,
    });
    expect(submit).toBeDisabled();
  });

  it("should disable the input and the button if a message is loading", () => {
    const amendedMockContext = {
      ...baseMockContext,
      isLoadingMessage: true,
      needsInputIndexes: [1, 2],
      currentStep: 2,
    };
    customRender(<ChatFooter />, { contextProps: amendedMockContext });
    const input = screen.getByRole("textbox");
    expect(input).toBeDisabled();
    const submit = screen.getByRole("button", {
      name: /submit/i,
    });
    expect(submit).toBeDisabled();
  });
});

describe("Chat Footer: Events", () => {
  it("should type into the input box", () => {
    const amendedMockContext = {
      ...baseMockContext,
      isLoadingMessage: false,
      needsInputIndexes: [1, 2],
      currentStep: 2,
    };
    customRender(<ChatFooter />, { contextProps: amendedMockContext });
    const input: HTMLInputElement = screen.getByRole("textbox");
    expect(input).not.toBeDisabled();
    fireEvent.change(input, { target: { value: "hello" } });
    expect(input.value).toBe("hello");
  });

  it("should clear the inputbox after submit", () => {
    const amendedMockContext = {
      ...baseMockContext,
      isLoadingMessage: false,
      needsInputIndexes: [0, 2],
      currentStep: 0,
      fetchResults: {
        data: {
          conversation: [{ key: "test" }],
        },
      },
    };
    customRender(<ChatFooter />, { contextProps: amendedMockContext });
    const input: HTMLInputElement = screen.getByRole("textbox");
    expect(input).not.toBeDisabled();
    fireEvent.change(input, { target: { value: "hello" } });
    expect(input.value).toBe("hello");
    const submit = screen.getByRole("button", {
      name: /submit/i,
    });
    fireEvent.click(submit);
    expect(input.value).toBe("");
  });
});
