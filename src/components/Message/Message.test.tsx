import React from "react";
import { act, fireEvent, screen } from "@testing-library/react";
import Message from "./Message";
import { customRender } from "../../utils/test-utils";
import { ConversationType } from "../../data/types";

const mockMessage = {
  key: "test",
  text: "this is a message",
  answers: [],
  id: 1,
};

afterEach(() => {
  jest.useRealTimers();
});

describe("Message: Starting state", () => {
  it("should display the loader", () => {
    customRender(
      <Message message={mockMessage} showNext={() => jest.fn()} index={0} />,
      {}
    );
    const message = screen.getByTestId(/loading/i);
    expect(message).toBeInTheDocument();
  });

  it("should call setTimeout after 1500 ms", () => {
    jest.useFakeTimers();
    jest.spyOn(global, "setTimeout");
    customRender(
      <Message message={mockMessage} showNext={() => jest.fn()} index={0} />,
      {}
    );
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1500);
  });

  it("should show message after setTimeout", () => {
    const mockShowNext = jest.fn();
    jest.useFakeTimers();
    customRender(
      <Message message={mockMessage} showNext={mockShowNext} index={0} />,
      {}
    );
    act(() => {
      jest.advanceTimersByTime(1500);
    });
    const message = screen.getByText(/this is a message/i);
    expect(message).toBeInTheDocument();
    expect(mockShowNext).toHaveBeenCalledTimes(1);
  });

  it("should show options (after timeout) if multiple choice", () => {
    const mockShowNext = jest.fn();
    const amendedMockMessage = {
      ...mockMessage,
      answers: [
        {
          id: 1,
          key: "sed",
          text: "test",
        },
        {
          id: 2,
          key: "unde",
          text: "test",
        },
        {
          id: 3,
          key: "iste",
          text: "test",
        },
      ],
    };
    jest.useFakeTimers();
    customRender(
      <Message
        message={amendedMockMessage}
        showNext={mockShowNext}
        index={0}
      />,
      {}
    );
    act(() => {
      jest.advanceTimersByTime(1500);
    });
    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBe(3);
  });

  it("should show no buttons if not multiple choice", () => {
    const mockShowNext = jest.fn();
    const amendedMockMessage = {
      ...mockMessage,
      answers: "input",
    };
    jest.useFakeTimers();
    customRender(
      <Message
        message={amendedMockMessage}
        showNext={mockShowNext}
        index={0}
      />,
      {}
    );
    act(() => {
      jest.advanceTimersByTime(1500);
    });
    const buttons = screen.queryAllByRole("button");
    expect(buttons.length).toBe(0);
  });
});

describe("Message: Events", () => {
  let mockShowNext: jest.Mock;
  let amendedMockMessage: ConversationType;

  beforeEach(() => {
    mockShowNext = jest.fn();
    amendedMockMessage = {
      ...mockMessage,
      answers: [
        {
          id: 1,
          key: "sed",
          text: "test-1",
        },
        {
          id: 2,
          key: "unde",
          text: "test-2",
        },
        {
          id: 3,
          key: "iste",
          text: "test-3",
        },
      ],
    };
    jest.useFakeTimers();
  });

  it("should trigger handleNext on answer click", () => {
    customRender(
      <Message
        message={amendedMockMessage}
        showNext={mockShowNext}
        index={0}
      />,
      {}
    );
    act(() => {
      jest.advanceTimersByTime(1500);
    });
    const buttonTestOne = screen.getByRole("button", { name: /test-1/i });
    fireEvent.click(buttonTestOne);
    expect(mockShowNext).toHaveBeenCalledTimes(1);
  });

  it("should hide the buttons and show the reply when an answer is chosen", () => {
    customRender(
      <Message
        message={amendedMockMessage}
        showNext={mockShowNext}
        index={0}
      />,
      {}
    );
    act(() => {
      jest.advanceTimersByTime(1500);
    });
    const buttonTestOne = screen.getByRole("button", { name: /test-1/i });
    fireEvent.click(buttonTestOne);
    const buttons = screen.queryAllByRole("button", { name: /test-/i });
    expect(buttons.length).toBe(0);
    const userReply = screen.getByText(/test-1/i);
    expect(userReply).toBeInTheDocument();
  });
});
