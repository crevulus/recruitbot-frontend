import { render, screen } from "@testing-library/react";
import App from "../../App";

describe("main chat window logic", () => {
  it("should load elements", () => {
    render(<App />);
    const chatCloseButton = screen.getByRole("button", {
      name: /close recruitbot/i,
    });
    expect(chatCloseButton).toBeInTheDocument();
  });

  it("should not show chat if openWidget param not present on load", () => {
    Object.defineProperty(window, "location", {
      value: {
        search: "",
      },
    });
    render(<App />);
    const chatWindow = screen.getByTestId("chat-window");
    expect(chatWindow).toHaveStyle("max-height: 0px");
  });
});
