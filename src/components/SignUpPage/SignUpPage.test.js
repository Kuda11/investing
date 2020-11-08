import React from "react";
import { render } from "@testing-library/react";
import SignUpPage from "./SignUpPage";

describe("SignUpPage tests", () => {
  it("should render", () => {
    expect(render(<SignUpPage />)).toBeTruthy();
  });
});
