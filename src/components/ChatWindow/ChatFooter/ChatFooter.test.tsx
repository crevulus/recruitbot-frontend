import { render, screen } from "@testing-library/react";
import React from "react";
import ChatFooter from "./ChatFooter";

it("should test chat footer", () => {
  render(<ChatFooter />);
  const div = screen.getByText(/chat footer/i);
  expect(div).toBeInTheDocument();
});
