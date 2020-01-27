import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import GroceryList from "./grocery-list";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with or without a groceries array", () => {
  act(() => {
    render(<GroceryList />, container);
  });
  expect(container.textContent).toBe("No groceries available");
});
