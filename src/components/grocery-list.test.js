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

const oneGrocery = [{
  name: "Carrots",
  amount: 500,
  measurement: "grams",
  price: 1
}]

it("renders with or without a groceries array", () => {
  act(() => {
    render(<GroceryList />, container);
  });
  expect(container.textContent).toBe("No groceries available.");

  act(() => {
    render(<GroceryList groceries={oneGrocery}/>, container);
  });
  expect(container.textContent).toContain("Carrots");
});
