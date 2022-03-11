import { fireEvent, screen } from "@testing-library/react";
import ChatWindow from ".";
import App from "../../App";
import { baseMockContext, customRender } from "../../utils/test-utils";

function changeJSDOMURL(url: string) {
  const newURL = new URL(url);
  const href = `${window.origin}${newURL.pathname}${newURL.search}${newURL.hash}`;
  console.log(href);
  // eslint-disable-next-line no-restricted-globals
  history.replaceState(history.state, "", href);
}

describe("main chat window logic", () => {
  it("should show loading before fetchResults are made", () => {
    const element = document.createElement("div");
    customRender(<App domElement={element} />, {});
    const chatWindow = screen.getByTestId(/loading/i);
    expect(chatWindow).toBeInTheDocument();
  });

  const amendedMockContext = {
    ...baseMockContext,
    fetchResults: {
      isLoading: false,
      data: {
        cta: "this is a trick",
        conversation: [
          {
            id: 7,
            text: "Thanks for your response! We will get back to you shortly.",
            answers: [],
          },
        ],
      },
    },
  };

  it("should not show chat if openWidget param not present on load", () => {
    Object.defineProperty(window, "location", {
      value: {
        search: "",
      },
    });
    customRender(<ChatWindow />, { contextProps: amendedMockContext });
    const chatWindow = screen.getByTestId("chat-window");
    expect(chatWindow).toHaveStyle("max-height: 0px");
  });

  it("should show chat if openWidget param = true", () => {
    const mockOpenWidgetParam = true;
    const amendedMockContext = {
      ...baseMockContext,
      showChat: mockOpenWidgetParam,
      fetchResults: {
        isLoading: false,
        data: {
          cta: "this is a trick",
          conversation: [
            {
              id: 1,
              text: "Thanks for your response! We will get back to you shortly.",
              answers: [],
            },
          ],
        },
      },
    };
    customRender(<ChatWindow />, { contextProps: amendedMockContext });
    const chatWindow = screen.getByTestId("chat-window");
    expect(chatWindow).toHaveStyle("max-height: 100vh");
  });

  it.todo(
    "should close the ChatWindow if x button is clicked"
    // () => {
    //   let mockOpenWidgetParam = true;
    //   const amendedMockContext = {
    //     ...baseMockContext,
    //     showChat: mockOpenWidgetParam,
    //   };
    //   customRender(<ChatWindow />, { contextProps: amendedMockContext });
    //   const button = screen.getByRole("button", { name: /close recruitbot/i });
    //   fireEvent.click(button);
    //   const chatWindow = screen.getByTestId("chat-window");
    //   expect(chatWindow).toHaveStyle("max-height: 0px");
    // }
  );
});
