import { act } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import { createContext } from "react";
import { AppContext } from "../data/AppContext";
import { baseMockContext } from "../utils/test-utils";
import { useDeviceSize } from "./useDeviceSize";
import { useLocalStorage } from "./useLocalStorage";
import { useShowMessages } from "./useShowMessages";

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
