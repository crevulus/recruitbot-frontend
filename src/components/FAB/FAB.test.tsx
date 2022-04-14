import { fireEvent, screen, waitFor } from "@testing-library/react";
import App from "../../App";
import { baseMockContext, customRender } from "../../utils/test-utils";
import FAB from "./FAB";

afterEach(() => {
  jest.useRealTimers();
});

describe("FAB: Starting State", () => {
  it("renders briefcase icon", () => {
    customRender(<FAB />, {});
    const linkElement = screen.getByTitle(/Work with us/i);
    expect(linkElement).toBeInTheDocument();
  });

  it("doesn't show cta message at first", () => {
    customRender(<FAB />, {});
    const messageSpan = screen.queryByText(
      "Considering a career in nursing? Join our team!"
    );
    expect(messageSpan).not.toBeInTheDocument();
  });

  it("should call setTimeout after 5000 ms", () => {
    jest.useFakeTimers();
    jest.spyOn(global, "setTimeout");
    customRender(<FAB />, {});
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1001); // tODO: Why 1001?
  });

  it("should show no message if call to API has failed", () => {
    jest.useFakeTimers();
    jest.advanceTimersByTime(5000);
    customRender(<FAB />, {});
    const message = screen.queryByTestId("fab-message-wrapper");
    expect(message).toBeNull();
  });

  it.todo(
    "should show message after setTimeout"
    // , async () => {
    //   jest.useFakeTimers();
    //   jest.advanceTimersByTime(5000);
    //   const amendedMockContext = {
    //     ...baseMockContext,
    //     introductionData: {
    //       data: {
    //         cta: "This is a cta!",
    //       },
    //     },
    //   };
    //   customRender(<FAB />, { contextProps: amendedMockContext });
    //   const message = screen.queryByText(/this/i);
    //   await waitFor(() => expect(message).toBeInTheDocument());
    // }
  );
});

describe("FAB: Events", () => {
  // it("should change button appearance if FAB is hovered", () => {
  //   jest.useFakeTimers();
  //   jest.spyOn(global, "setTimeout");
  //   customRender(<FAB />, {});
  //   const button = screen.getByLabelText(/Open Recruitbot/i);
  //   fireEvent.mouseEnter(button);
  //   expect(button).not.toHaveStyle("background: #31c04d");
  // });

  // it("should change icon appearance if FAB is hovered", () => {
  //   jest.useFakeTimers();
  //   jest.spyOn(global, "setTimeout");
  //   customRender(<FAB />, {});
  //   const button = screen.getByLabelText(/Open Recruitbot/i);
  //   fireEvent.mouseEnter(button);
  //   const iconWrapper = screen.getByTestId(/breifcase-icon-wrapper/i);
  //   expect(iconWrapper).toHaveStyle("transform: scale(0.9)");
  // });

  it.todo(
    "should open ChatWindow if FAB is clicked"
    // , () => {
    //   jest.useFakeTimers();
    //   jest.spyOn(global, "setTimeout");
    //   const element = document.createElement("div");
    //   customRender(<App domElement={element} />, {});
    //   const button = screen.getByLabelText(/Open Recruitbot/i);
    //   fireEvent.click(button);
    //   const chatWindow = screen.getByTestId(/chat-window/i);
    //   expect(chatWindow).toHaveStyle("max-height: 100vh");
    // }
  );
});
