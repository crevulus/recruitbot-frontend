import React from "react";
import { LoadingSpinnerTypes } from "../../data/enums";
import { customRender } from "../../utils/test-utils";
import LoadingSpinner from "./LoadingSpinner";

describe("LoadingSpinner", () => {
  it("LoadingSpinner renders without error", () => {
    customRender(<LoadingSpinner variant={LoadingSpinnerTypes.Fetching} />, {});
  });
});
