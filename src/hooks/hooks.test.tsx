import { renderHook, act } from "@testing-library/react-hooks";
import { useLocalStorage } from "./useLocalStorage";

describe("useLocalStorage", () => {
  it("should render default values if random value passed to hook", () => {
    const { result } = renderHook(() => useLocalStorage("random-key"));
    expect(result.current.valueIsPresent).toBeFalsy();
    expect(result.current.localStorageBooleanValue).toBeUndefined();
  });
});
