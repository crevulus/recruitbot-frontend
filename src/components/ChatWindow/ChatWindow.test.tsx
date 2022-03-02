import { screen } from "@testing-library/react";
import ChatWindow from ".";
import App from "../../App";
import { baseMockContext, customRender } from "../../utils/test-utils";

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

  it.todo(
    "should not show chat if openWidget param = true"
    // () => {
    //   const amendedMockContext = {
    //     ...baseMockContext,
    //     fetchResults: {
    //       isLoading: false,
    //       data: {
    //         cta: "this is a trick",
    //         conversation: [
    //           {
    //             id: 1,
    //             text: "Thanks for your response! We will get back to you shortly.",
    //             answers: [],
    //           },
    //         ],
    //       },
    //     },
    //   };
    //   const location = {
    //     ...window.location,
    //     search: "openWidget=true",
    //   };
    //   Object.defineProperty(window, "location", {
    //     value: location,
    //   });
    //   customRender(<ChatWindow />, { contextProps: amendedMockContext });
    //   const chatWindow = screen.getByTestId("chat-window");
    //   expect(chatWindow).toHaveStyle("max-height: 100vh");
    // }
  );
});
