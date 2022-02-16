import { render, screen } from "@testing-library/react";
import React from "react";
import ChatHeader from "./ChatHeader";

it("should test chat header", () => {
  render(<ChatHeader />);
  const button = screen.getByRole("button", { name: /close recruitbot/i });
  expect(button).toBeInTheDocument();
});
