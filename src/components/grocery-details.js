import React from "react";

export default function GroceryDetails(props) {

  const deselectGrocery = () => {
    props.deselectGrocery()
  }

  return (
    <React.Fragment>
      <a onClick={deselectGrocery}>Back</a>
      <div id="grocery-details-div">
        <h3>{props.grocery.name}, {props.grocery.amount} {props.grocery.measurement}</h3>
        <p>{props.grocery.description}</p>
      </div>
    </React.Fragment>
  )
}
