import React from "react";
import { act, screen } from "@testing-library/react";
import Message from "./Message";
import { customRender } from "../../utils/test-utils";

const mockMessage = {
  text: "this is a message",
  answers: [],
  id: 1,
};

afterEach(() => {
  jest.useRealTimers();
});

describe("Message: Starting state", () => {
  it("should display the loader", () => {
    customRender(<Message message={mockMessage} />, {});
    const message = screen.getByText(/loading.../i);
    expect(message).toBeInTheDocument();
  });

  it("should call setTimeout after 1500 ms", () => {
    jest.useFakeTimers();
    jest.spyOn(global, "setTimeout");
    customRender(<Message message={mockMessage} />, {});
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1500);
  });

  it("should show message after setTimeout", () => {
    const mockShowNext = jest.fn();
    jest.useFakeTimers();
    customRender(<Message message={mockMessage} showNext={mockShowNext} />, {});
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
      <Message message={amendedMockMessage} showNext={mockShowNext} />,
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
      <Message message={amendedMockMessage} showNext={mockShowNext} />,
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
  it.todo("should trigger handleNext on answer click");
});
