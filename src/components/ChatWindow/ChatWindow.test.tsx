import { screen, waitFor } from "@testing-library/react";
import ChatWindow from ".";
import App from "../../App";
import { baseMockContext, customRender } from "../../utils/test-utils";

describe("ChatWindow", () => {
  const amendedMockContext = {
    ...baseMockContext,
    introductionData: {
      isLoading: true,
      error: false,
      data: {
        cta: "this is a trick",
      },
    },
    conversationData: {
      isLoading: true,
      error: false,
      data: [
        {
          id: 7,
          text: "Thanks for your response! We will get back to you shortly.",
          answers: [],
        },
      ],
    },
  };

  describe("ChatWindow: Fetch Logic", () => {
    let mockFetch: jest.SpyInstance<Promise<Response>>;

    beforeEach(async () => {
      const mockResponse = amendedMockContext.conversationData;
      mockFetch = jest.spyOn(global, "fetch");
      // @ts-ignore
      mockFetch.mockImplementation(() => {
        return Promise.resolve({
          json: () => Promise.resolve(mockResponse),
        });
      });
    });

    afterEach(() => {
      mockFetch.mockRestore();
    });

    it("should make two fetch calls on load", async () => {
      const element = document.createElement("div");
      await customRender(<App domElement={element} />, {});
      await waitFor(() => expect(mockFetch).toHaveBeenCalledTimes(2));
    });

    it("should show loading before fetching is complete", async () => {
      const element = document.createElement("div");
      await customRender(<App domElement={element} />, {});
      const loadingSpinner = screen.getByTestId(/loading/i);
      await waitFor(() => expect(loadingSpinner).toBeInTheDocument());
    });
  });

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
    const localAmendedMockContext = {
      ...amendedMockContext,
      showChat: mockOpenWidgetParam,
    };
    customRender(<ChatWindow />, { contextProps: localAmendedMockContext });
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
