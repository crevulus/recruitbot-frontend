import React from "react";
import { fireEvent, screen } from "@testing-library/react";
import { customRender, baseMockContext } from "../../../utils/test-utils";
import ChatFooter from "./ChatFooter";
import * as hooks from "../../../hooks/useLocalStorage";

describe("ChatFooter: Starting state", () => {
  afterEach(() => {
    jest.restoreAllMocks(); // necessary to remove the spyOn fn
  });

  it("should show basic elements", () => {
    customRender(<ChatFooter />, {});
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
    const submit = screen.getByLabelText(/submit/i);
    expect(submit).toBeInTheDocument();
    const img = screen.getByRole("img", {
      name: /recruitbot/i,
    });
    expect(img).toBeInTheDocument();
  });

  it("should disable the input box if cookie banner is visible", () => {
    jest.spyOn(hooks, "useLocalStorage").mockImplementation(() => ({
      localStorageBooleanValue: undefined,
      valueIsPresent: false,
      handleAddBooleanToLocalStorage: () => jest.fn(),
    }));
    customRender(<ChatFooter />, {});
    const input = screen.getByRole("textbox");
    expect(input).toBeDisabled();
    const submit = screen.getByLabelText(/submit/i);
    expect(submit).toBeDisabled();
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
    const submit = screen.getByLabelText(/submit/i);
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
    const submit = screen.getByLabelText(/submit/i);
    expect(submit).toBeDisabled();
  });
});

describe("Chat Footer: Events", () => {
  describe("Cookie Banner Hidden", () => {
    beforeEach(() => {
      jest.spyOn(hooks, "useLocalStorage").mockImplementation(() => ({
        localStorageBooleanValue: true,
        valueIsPresent: true,
        handleAddBooleanToLocalStorage: () => jest.fn(),
      }));
    });

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
      const submit = screen.getByLabelText(/submit/i);
      fireEvent.click(submit);
      expect(input.value).toBe("");
    });
  });
});
