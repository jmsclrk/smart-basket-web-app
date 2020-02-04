export const testSingleGroceryList = [{
  id: 1,
  name: "Carrots",
  amount: 800,
  measurement: "grams",
  price: 1.5,
  description: "Orange root vegetable high in beta carotene, fiber and vitamin K."
}]

export const testMultiGroceryList = [{
  id: 1,
  name: "Carrots",
  amount: 800,
  measurement: "grams",
  price: 1.5,
  description: "Orange root vegetable high in beta carotene, fiber and vitamin K."
},
{
  id: 2,
  name: "Beef Mince",
  amount: 500,
  measurement: "grams",
  price: 4,
  description: "Ground beef with 10% fat content, high in protein and iron."
}]

export const testSingleGrocery = {
  id: 1,
  name: "Carrots",
  amount: 800,
  measurement: "grams",
  price: 1.5,
  description: "Orange root vegetable high in beta carotene, fiber and vitamin K"
}

export const testSingleGrocery2 = {
  id: 2,
  name: "Beef Mince",
  amount: 500,
  measurement: "grams",
  price: 4,
  description: "Ground beef with 10% fat content, high in protein and iron."
}

export const testSingleGroceryBasket = [
  {
    quantity: 1,
    grocery: testSingleGrocery
  }
]

export const testMultiGroceryBasket = [
  {
    quantity: 1,
    grocery: testSingleGrocery
  },
  {
    quantity: 1,
    grocery: testSingleGrocery2
  },
]

export const testDuplicateItemGroceryBasket = [
  {
    quantity: 2,
    grocery: testSingleGrocery
  }
]
