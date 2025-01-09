/* eslint-disable no-unused-vars */
import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import Greeting from "./Greeting";

describe("Greeting", () => {
  it("should render a default reading", () => {
    render(<Greeting />);
    expect(screen.getByText("Hello, World!")).toBeInTheDocument();
  });

  it("should render greeting with a name ", () => {
    render(<Greeting name={"Pedro"} />);
    expect(screen.getByText("Hello, Pedro!")).toBeInTheDocument()
  });
});
