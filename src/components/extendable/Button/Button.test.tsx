import React from "react";
import { fireEvent, screen } from "@testing-library/react";
import { customRender } from "../../../utils/test-utils";
import Button from "./Button";
import { CrossIcon } from "../../Icons";

describe("Button: Starting state", () => {
  it("renders text children", () => {
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

  it("renders component children", () => {
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

describe("Button: Events", () => {
  it("clicks a button", () => {
    const mockFn = jest.fn();
    customRender(
      <Button onClick={mockFn}>
        <p>Test</p>
      </Button>,
      {}
    );
    const button = screen.getByRole("button", { name: /test/i });
    fireEvent.click(button);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it("does not click if button is disabled", () => {
    const mockFn = jest.fn();
    customRender(
      <Button onClick={mockFn} disabled={true}>
        <p>Test</p>
      </Button>,
      {}
    );
    const button = screen.getByRole("button", { name: /test/i });
    fireEvent.click(button);
    expect(button).toBeDisabled();
    expect(mockFn).toHaveBeenCalledTimes(0);
  });
});
