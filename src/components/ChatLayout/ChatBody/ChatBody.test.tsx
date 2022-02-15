import { render, screen } from "@testing-library/react";
import React from "react";
import ChatBody from "./ChatBody";

it("should test chatbody", () => {
  render(<ChatBody />);
  const div = screen.getByText(/chat body/i);
  expect(div).toBeInTheDocument();
});
