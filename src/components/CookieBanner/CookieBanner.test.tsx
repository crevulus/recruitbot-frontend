import React from "react";
import { fireEvent, screen } from "@testing-library/react";
import { customRender } from "../../utils/test-utils";
import CookieBanner from "./CookieBanner";
import ChatFooter from "../ChatWindow/ChatFooter";

jest.mock("mixpanel-browser");

describe("CookieBanner", () => {
  it("should render CookieBanner without error", () => {
    customRender(<CookieBanner />, {});
    const cookieBanner = screen.getByText(
      /This chatbot uses cookies to improve your experience./i
    );
    expect(cookieBanner).toBeInTheDocument();
  });

  it("should hide CookieBanner if button is clicked", () => {
    customRender(<ChatFooter />, {});
    const cookieBanner = screen.getByText(
      /This chatbot uses cookies to improve your experience./i
    );
    const acceptButton = screen.getByRole("button", { name: /accept/i });
    fireEvent.click(acceptButton);
    expect(cookieBanner).not.toBeInTheDocument();
  });
});
