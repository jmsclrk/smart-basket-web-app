import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import GroceryDetails from '.';
import { testSingleGrocery } from './../config/test-groceries'

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



it("renders with a grocery item", () => {
  act(() => {
    render(<GroceryDetails grocery={testSingleGrocery} />, container)
  })
  expect(container.querySelector("h3").textContent).toBe("Carrots (800 grams)")
  expect(container.querySelector("p").textContent).toBe(testSingleGrocery.description)
})
