import React from "react";
import PropTypes from 'prop-types'

const GroceryDetails = (props) => {

  const deselectGrocery = () => {
    props.deselectGrocery()
  }

  if(!props.grocery) {
    return null
  }

  return (
    <div data-test="grocery-details-container">
      <a data-test="gd-back-button" onClick={deselectGrocery} href=' '>Back</a>
      <div id="grocery-details">
        <h3 data-test="grocery-title">{props.grocery.name} ({props.grocery.amount} {props.grocery.measurement})</h3>
        <p data-test="grocery-desc">{props.grocery.description}</p>
      </div>
    </div>
  )
}

GroceryDetails.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  amount: PropTypes.number,
  measurement: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string
}

export default GroceryDetails
