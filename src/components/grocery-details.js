import React from "react";

export default function GroceryDetails(props) {
  return (
    <div id="grocery-details-div">
      <h3>{props.grocery.name}, {props.grocery.amount} {props.grocery.measurement}</h3>
      <p>{props.grocery.description}</p>
    </div>
  )
}
