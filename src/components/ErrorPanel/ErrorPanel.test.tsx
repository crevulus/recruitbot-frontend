import React from "react";
import { screen } from "@testing-library/react";
import { customRender } from "../../utils/test-utils";
import ErrorPanel from "./ErrorPanel";

describe("ErrorPanel", () => {
  it("ErrorPanel renders without error", () => {
    customRender(
      // @ts-ignore
      <ErrorPanel>
        <></>
      </ErrorPanel>,
      {}
    );
    const icon = screen.getByTitle(/error warning/i);
    expect(icon).toBeInTheDocument();
  });

  it("ErrorPanel renders text children", () => {
    customRender(
      // @ts-ignore
      <ErrorPanel>{"test"}</ErrorPanel>,
      {}
    );
    const text = screen.getByText(/test/i);
    expect(text).toBeInTheDocument();
  });
});
