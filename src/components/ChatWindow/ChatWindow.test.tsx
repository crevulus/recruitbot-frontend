import { render, screen } from "@testing-library/react";
import App from "../../App";

describe("main chat window logic", () => {
  it("should not show chat window on load", () => {
    render(<App />);
    const mainChatWindow = screen.queryByTestId("chat-window");
    expect(mainChatWindow).not.toBeInTheDocument();
  });
});
