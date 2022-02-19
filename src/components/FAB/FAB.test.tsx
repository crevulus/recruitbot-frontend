import { screen } from "@testing-library/react";
import { customRender } from "../../utils/test-utils";
import FAB from "./FAB";

afterEach(() => {
  jest.useRealTimers();
});

describe("beginning call to action/FAB logic", () => {
  it("renders briefcase icon", () => {
    customRender(<FAB />);
    const linkElement = screen.getByTitle(/Work with us/i);
    expect(linkElement).toBeInTheDocument();
  });

  it("doesn't show cta message at first", () => {
    customRender(<FAB />);
    const messageSpan = screen.queryByText(
      "Considering a career in nursing? Join our team!"
    );
    expect(messageSpan).not.toBeInTheDocument();
  });

  it("should call setTimeout after 5000 ms", () => {
    jest.useFakeTimers();
    jest.spyOn(global, "setTimeout");
    customRender(<FAB />);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 5000);
  });

  it("should show message after setTimeout", () => {
    jest.useFakeTimers();
    jest.advanceTimersByTime(5000);
    customRender(<FAB />);
    const message = screen.getByTestId("fab-message-wrapper");
    expect(message).toHaveStyle("opacity: 100%");
  });
});
