import { act } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import { FetchTypes } from "../data/enums";
import { baseMockContext } from "../utils/test-utils";
import { useDeviceSize } from "./useDeviceSize";
import { useFetch } from "./useFetch";
import { useLocalStorage } from "./useLocalStorage";

describe("useLocalStorage", () => {
  const LOCAL_STORAGE_TEST_KEY = "random-key";

  afterEach(() => {
    if (typeof window !== "undefined") {
      localStorage.removeItem(LOCAL_STORAGE_TEST_KEY);
    }
  });

  it("should render default values if random value passed to hook", () => {
    const { result } = renderHook(() =>
      useLocalStorage(LOCAL_STORAGE_TEST_KEY)
    );
    expect(result.current.isValuePresent).toBeFalsy();
    expect(result.current.localStorageBooleanValue).toBeUndefined();
  });

  it("should add boolean (as a string) to local storage", () => {
    const { result } = renderHook(() =>
      useLocalStorage(LOCAL_STORAGE_TEST_KEY)
    );
    act(() => {
      // need "act" when setting state
      result.current.handleAddBooleanToLocalStorage(
        LOCAL_STORAGE_TEST_KEY,
        true
      );
    });
    const localStorageValue = window.localStorage.getItem(
      LOCAL_STORAGE_TEST_KEY
    );
    expect(localStorageValue).toBe("true");
  });

  it("should add isValuePresent and localStorageBooleanValue values (as booleans) to hook state", () => {
    const { result } = renderHook(() =>
      useLocalStorage(LOCAL_STORAGE_TEST_KEY)
    );
    act(() => {
      // need "act" when setting state
      result.current.handleAddBooleanToLocalStorage(
        LOCAL_STORAGE_TEST_KEY,
        false
      );
    });
    expect(result.current.isValuePresent).toBe(true);
    expect(result.current.localStorageBooleanValue).toBe(false);
  });
});

describe("useFetch", () => {
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

  it("should call execute fetch once", async () => {
    await act(async () => {
      await renderHook(() =>
        useFetch({ url: "/api/conversation", type: FetchTypes.Get })
      );
    });
    expect(mockFetch).toHaveBeenCalledTimes(1);
  });

  it("should return error: true and isLoading: false", async () => {
    let result: any;
    await act(async () => {
      const view = await renderHook(() =>
        useFetch({ url: "/api/conversation", type: FetchTypes.Get })
      );
      result = view.result;
    });
    expect(result!.current.isLoading).toBeFalsy();
    expect(result!.current.error).toBeTruthy();
  });
});

// describe("useShowMessages", () => {
//   const amendedMockContext = {
//     ...baseMockContext,
//     conversationData: {
//       data: [
//         {
//           key: "test",
//           _id: {
//             $oid: "test",
//           },
//           answers: [],
//           id: "test",
//           text: "this is a test",
//         },
//       ],
//     },
//   };
//   const MockContext = createContext(amendedMockContext);
//   it("should return a full visibility tree on first call", () => {
//     const wrapper = ({ children }: any) => (
//       // @ts-ignore
//       <MockContext.Provider value={amendedMockContext}>
//         {children}
//       </MockContext.Provider>
//     );
//     const { result } = renderHook(() => useShowMessages(), { wrapper });
//     console.log(result.current);
//   });
// });

describe("useDeviceSize", () => {
  beforeEach(() => jest.resetModules());

  it("should return the window size", () => {
    const { result } = renderHook(() => useDeviceSize());
    expect(result.current.windowSize.width).not.toBeUndefined();
    expect(result.current.windowSize.height).not.toBeUndefined();
  });

  it("should return isMobile false by default when using JSDOM's default window dimensions", () => {
    // default global window dimensions = 768px & 1024px: https://stackoverflow.com/a/46256392/13063136
    const { result } = renderHook(() => useDeviceSize());
    expect(result.current.isMobile).toBe(false);
  });

  it("should return isMobile true if window is smaller than 768px", () => {
    global.innerWidth = 767;
    const { result } = renderHook(() => useDeviceSize());
    expect(result.current.isMobile).toBe(true);
  });
});
