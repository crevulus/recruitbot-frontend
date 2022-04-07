import isEmpty from "./utils/isEmpty";
import { zIndex, Z_INDEX_BASE } from "./styles/zIndex";

describe("isEmpty", () => {
  it("should return false if the object is not empty", () => {
    const testObj = { foo: "bar" };
    const result = isEmpty(testObj);
    expect(result).toBeFalsy();
  });

  it("should return true if the object is empty", () => {
    const testObj = {};
    const result = isEmpty(testObj);
    expect(result).toBeTruthy();
  });
});

describe("zIndex", () => {
  it("should return 10000 if 'null' is passed in as an arg", () => {
    const result = zIndex("null");
    expect(result).toEqual(Z_INDEX_BASE);
  });

  it("should return a lesser number if compared to a later map value", () => {
    const result1 = zIndex("null");
    const result2 = zIndex("overlay");
    expect(result1).toBeLessThan(result2);
  });

  it("should return a greater number if compared to an earlier map value", () => {
    const result1 = zIndex("overlay");
    const result2 = zIndex("chat-window");
    expect(result1).toBeGreaterThan(result2);
  });
});
