import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import GroceryDetails from "./grocery-details";

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

const grocery = {
  id: 1,
  name: "Carrots",
  amount: 800,
  measurement: "grams",
  price: 1.5,
  description: "Orange root vegetable high in beta carotene, fiber and vitamin K"
}

it("renders with a grocery item", () => {
  act(() => {
    render(<GroceryDetails grocery={grocery} />, container)
  })
  expect(container.querySelector("h3").textContent).toBe("Carrots (800 grams)")
  expect(container.querySelector("p").textContent).toBe(grocery.description)
})
