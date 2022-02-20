import { screen } from "@testing-library/react";
import App from "../../App";
import { baseMockContext, customRender } from "../../utils/test-utils";

describe("main chat window logic", () => {
  it("should load elements", () => {
    customRender(<App />, { contextProps: baseMockContext });
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
    customRender(<App />, { contextProps: baseMockContext });
    const chatWindow = screen.getByTestId("chat-window");
    expect(chatWindow).toHaveStyle("max-height: 0px");
  });
});
