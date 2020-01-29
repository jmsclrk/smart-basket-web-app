import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import GroceryList from ".";
import { testSingleGroceryList, testMultiGroceryList } from './../config/test-groceries';

let container = null
beforeEach(() => {
  container = document.createElement("div")
  document.body.appendChild(container)
})

afterEach(() => {
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

it("renders with or without a groceries array", () => {
  act(() => {
    render(<GroceryList />, container)
  })
  expect(container.textContent).toBe("No groceries available.")

  act(() => {
    render(<GroceryList groceries={testSingleGroceryList}/>, container)
  })
  expect(container.textContent).toContain("Carrots")

  act(() => {
    render(<GroceryList groceries={testMultiGroceryList}/>, container)
  })
  expect(container.textContent).toContain("Carrots")
  expect(container.textContent).toContain("Beef Mince")
})

it("displays the price in pounds to two decimal places", () => {
  act(() => {
    render(<GroceryList groceries={testSingleGroceryList}/>, container)
  })
  expect(container.querySelector("strong").textContent).toBe("£1.50")
})
