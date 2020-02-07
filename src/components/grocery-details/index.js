import React from "react";
import PropTypes from 'prop-types'
import QuantityController from './../quantity-controller'

const GroceryDetails = (props) => {

  if(!props.grocery) {
    return null
  }

  return (
    <div data-test="grocery-details-container">
      <span data-test="gd-back-button" onClick={() => props.deselectGrocery()}>Back</span>
      <div id="grocery-details">
        <h3 data-test="grocery-title">{props.grocery.name} ({props.grocery.amount} {props.grocery.measurement})</h3>
        <p data-test="grocery-desc">{props.grocery.description}</p>
      </div>
      <QuantityController grocery={props.grocery} />
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
