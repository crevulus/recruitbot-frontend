import React from "react";
import { screen } from "@testing-library/react";
import { customRender } from "../../../utils/test-utils";
import Button from "./Button";
import { CrossIcon } from "../../Icons";

describe("Button", () => {
  it("Button renders text children", () => {
    customRender(
      <Button>
        <p>Test</p>
      </Button>,
      {}
    );
    const span = screen.getByText(/test/i);
    expect(span).toBeInTheDocument();
    expect(span.textContent).toBe("Test");
  });

  it("Button renders component children", () => {
    customRender(
      <Button>
        <CrossIcon />
      </Button>,
      {}
    );
    const icon = screen.getByTitle(/close/i);
    expect(icon).toBeInTheDocument();
  });
});
