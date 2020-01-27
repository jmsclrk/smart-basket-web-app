import React from "react";

export default function GroceryList(props) {
  let groceries = props.groceries
  if (groceries) {
    return (
      <div>
        <h2>{groceries[0].name} - {groceries[0].amount} {groceries[0].measurement}</h2>
        <strong>{groceries[0].price}</strong>
      </div>
    )
  } else {
    return <h1>No groceries available.</h1>;
  }
}
