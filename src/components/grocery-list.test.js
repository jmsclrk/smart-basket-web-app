import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import GroceryList from "./grocery-list";

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

const oneGrocery = [{
  name: "Carrots",
  amount: 500,
  measurement: "grams",
  price: 1
}]

const multiGroceries = [{
  id: 1,
  name: "Carrots",
  amount: 800,
  measurement: "grams",
  price: 1.5
},
{
  id: 2,
  name: "Beef Mince",
  amount: 500,
  measurement: "grams",
  price: 4
}]

it("renders with or without a groceries array", () => {
  act(() => {
    render(<GroceryList />, container)
  })
  expect(container.textContent).toBe("No groceries available.")

  act(() => {
    render(<GroceryList groceries={oneGrocery}/>, container)
  })
  expect(container.textContent).toContain("Carrots")

  act(() => {
    render(<GroceryList groceries={multiGroceries}/>, container)
  })
  expect(container.textContent).toContain("Carrots")
  expect(container.textContent).toContain("Beef Mince")
})
