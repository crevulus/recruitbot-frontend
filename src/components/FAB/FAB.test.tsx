import { screen } from "@testing-library/react";
import { baseMockContext, customRender } from "../../utils/test-utils";
import FAB from "./FAB";

afterEach(() => {
  jest.useRealTimers();
});

describe("beginning call to action/FAB logic", () => {
  it("renders briefcase icon", () => {
    customRender(<FAB />, { contextProps: baseMockContext });
    const linkElement = screen.getByTitle(/Work with us/i);
    expect(linkElement).toBeInTheDocument();
  });

  it("doesn't show cta message at first", () => {
    customRender(<FAB />, { contextProps: baseMockContext });
    const messageSpan = screen.queryByText(
      "Considering a career in nursing? Join our team!"
    );
    expect(messageSpan).not.toBeInTheDocument();
  });

  it("should call setTimeout after 5000 ms", () => {
    jest.useFakeTimers();
    jest.spyOn(global, "setTimeout");
    customRender(<FAB />, { contextProps: baseMockContext });
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 5000);
  });

  it("should show no message if call to API has failed", () => {
    jest.useFakeTimers();
    jest.advanceTimersByTime(5000);
    customRender(<FAB />, { contextProps: baseMockContext });
    const message = screen.queryByTestId("fab-message-wrapper");
    expect(message).toBeNull();
  });

  it("should show message after setTimeout", () => {
    jest.useFakeTimers();
    jest.advanceTimersByTime(5000);
    const amendedMockContext = {
      ...baseMockContext,
      fetchResults: {
        data: {
          cta: "This is a cta!",
        },
      },
    };
    customRender(<FAB />, { contextProps: amendedMockContext });
    const message = screen.queryByTestId("fab-message-wrapper");
    expect(message).toHaveStyle("opacity: 100%");
  });
});
