import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Basket from "./basket";
import { testSingleGroceryList, testMultiGroceryList } from './config/test-groceries';


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

const emptyArray = []

it("renders with or without a groceries added", () => {
  act(() => {
    render(<Basket items={emptyArray} />, container)
  })
  expect(container.textContent).toContain("Nothing added yet.")

  act(() => {
    render(<Basket items={testSingleGroceryList}/>, container)
  })
  expect(container.textContent).toContain("1 x Carrots (800 grams)")

  act(() => {
    render(<Basket items={testMultiGroceryList}/>, container)
  })
  expect(container.textContent).toContain("1 x Carrots (800 grams)")
  expect(container.textContent).toContain("1 x Beef Mince (500 grams)")
})
