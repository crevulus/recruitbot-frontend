import { fireEvent, render, screen } from "@testing-library/react";
import FAB from "./FAB";

afterEach(() => {
  jest.useRealTimers();
});

describe("beginning call to action/FAB logic", () => {
  it("renders briefcase icon", () => {
    render(<FAB />);
    const linkElement = screen.getByTitle(/Work with us/i);
    expect(linkElement).toBeInTheDocument();
  });

  it("doesn't show cta message at first", () => {
    render(<FAB />);
    const messageSpan = screen.queryByText(
      "Considering a career in nursing? Join our team!"
    );
    expect(messageSpan).not.toBeInTheDocument();
  });

  it("setTimeout to be called, set to 5 seconds", () => {
    jest.useFakeTimers();
    jest.spyOn(global, "setTimeout");
    render(<FAB />);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 5000);
  });

  it("should show message after setTimeout", () => {
    jest.useFakeTimers();
    jest.advanceTimersByTime(5000);
    render(<FAB />);
    const message = screen.getByTestId("fab-message-wrapper");
    expect(message).toHaveStyle("opacity: 100%");
  });
});
