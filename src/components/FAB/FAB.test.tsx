import React from "react";
import { render, screen } from "@testing-library/react";
import FAB from "./FAB";

it("renders briefcase icon", () => {
  render(<FAB />);
  const linkElement = screen.getByAltText(/work icon/i);
  expect(linkElement).toBeInTheDocument();
});
