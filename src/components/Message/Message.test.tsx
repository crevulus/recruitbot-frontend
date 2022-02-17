import React from "react";
import { render, screen } from "@testing-library/react";
import Message from "./Message";

const mockMessage = {
  text: "this is a message",
  answers: [],
  id: 1,
};

it("should test message display", () => {
  render(<Message message={mockMessage} />);
  const perk = screen.getByText(/loading.../i);
  expect(perk).toBeInTheDocument();
});
