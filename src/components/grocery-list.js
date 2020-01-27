import React from "react";

export default function GroceryList(props) {
  let groceries = props.groceries
  if (groceries) {
    return (
      <div id="grocery-list-div">
        <h1>Groceries</h1>
        { groceries.map((grocery) => {
          return (
            <div key={String(grocery.id)}>
              <h2>{grocery.name} - {grocery.amount} {grocery.measurement}</h2>
              <strong>£{grocery.price.toFixed(2)}</strong>
            </div>
          )
        })}
      </div>
    )
  } else {
    return <h1>No groceries available.</h1>;
  }
}
