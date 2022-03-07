import React from "react";
import { screen } from "@testing-library/react";
import { customRender } from "../../../utils/test-utils";
import ChatHeader from "./ChatHeader";

it("should test chat header", () => {
  customRender(<ChatHeader />, {});
  const button = screen.getByRole("button", { name: /close recruitbot/i });
  expect(button).toBeInTheDocument();
});
