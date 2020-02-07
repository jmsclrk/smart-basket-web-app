import React from "react";
import PropTypes from 'prop-types'
import './styles.scss'
import QuantityController from './../quantity-controller'

const GroceryDetails = (props) => {

  if(!props.grocery) {
    return null
  }

  return (
    <div id="grocery-details-container" data-test="grocery-details-container">
      <div id="grocery-details">
        <h4 data-test="grocery-title" class="gd-title">
          {props.grocery.name}
        </h4>
        <span
          id="gd-back-button"
          data-test="gd-back-button"
          onClick={() => props.deselectGrocery()}
        >
          GO BACK
        </span>
        <br/>
        <span class="gd-amount">{props.grocery.amount} {props.grocery.measurement}</span>
        <br/><br/>
        <p class="gd-desc" data-test="grocery-desc">{props.grocery.description}</p>
        <div class="gd-img-container"> </div>
        <br/>
        <span class="gd-addtobskt">ADD TO BASKET: </span>
        <QuantityController loc="g-details" grocery={props.grocery} />
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
