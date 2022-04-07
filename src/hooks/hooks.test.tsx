import { act } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import { createContext } from "react";
import { AppContext } from "../data/AppContext";
import { baseMockContext } from "../utils/test-utils";
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
    expect(result.current.valueIsPresent).toBeFalsy();
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

  it("should add valueIsPresent and localStorageBooleanValue values (as booleans) to hook state", () => {
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
    expect(result.current.valueIsPresent).toBe(true);
    expect(result.current.localStorageBooleanValue).toBe(false);
  });
});

describe("useShowMessages", () => {
  const MockContext = createContext(baseMockContext);
  const amendedMockContext = {
    ...baseMockContext,
    fetchResults: {
      data: {
        conversation: [{ key: "test" }],
      },
    },
  };
  it.todo(
    "should render something"
    // , () => {
    //   const wrapper = ({ children }: any) => (
    //     <MockContext.Provider value={amendedMockContext}>
    //       {children}
    //     </MockContext.Provider>
    //   );
    //   const { result } = renderHook(() => useShowMessages(), { wrapper });
    //   console.log(result.current);
    // }
  );
});
