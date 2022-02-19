import React from "react";
import { screen } from "@testing-library/react";
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

describe("Message", () => {
  it("should display the loader", () => {
    customRender(<Message message={mockMessage} />);
    const message = screen.getByText(/loading.../i);
    expect(message).toBeInTheDocument();
  });

  it("should call setTimeout after 1500 ms", () => {
    jest.useFakeTimers();
    jest.spyOn(global, "setTimeout");
    customRender(<Message message={mockMessage} />);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1500);
  });

  // it("should show message after setTimeout", () => {
  //   jest.useFakeTimers();
  //   jest.advanceTimersByTime(5000);
  //   customRender(<Message message={mockMessage} />);
  //   const message = screen.getByText(/this is a message/i);
  //   expect(message).toBeInTheDocument();
  // });
});
