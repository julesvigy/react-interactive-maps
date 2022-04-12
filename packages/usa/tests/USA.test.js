import expect from "expect";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { USA } from "src/";

describe("USA", () => {
  let node;
  beforeEach(() => {
    node = document.createElement("div");
  });
  afterEach(() => {
    unmountComponentAtNode(node);
  });
  it("should render the Map", () => {
    render(<USA />, node, () => {
      expect(node.innerHTML).toContain("grey");
    });
  });
});
