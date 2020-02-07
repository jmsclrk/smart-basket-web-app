import React from 'react'
import PropTypes from 'prop-types'
import QuantityController from './../quantity-controller'
import './styles.scss'

const GroceryPreviewTile = (props) => {
  const g = props.grocery

  return(
    <div data-test="gpt-component" className="gpt-container" onClick={() => props.selectGrocery(g)}>
    <h5 className="gpt-n" data-test="gpt-name">{g.name}</h5>
    <span className="gpt-a" data-test="gpt-amount">{g.amount} {g.measurement}</span><br/>
    <div className="gpt-img">
    </div>
    <span className="gpt-p" data-test="gpt-price">£{g.price.toFixed(2)}</span>
    <span className="gpt-add-basket">+</span>
    <QuantityController grocery={g} />
    </div>
  )
}

GroceryPreviewTile.propTypes = {
  grocery: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    amount: PropTypes.number,
    measurement: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string
  })
}

export default GroceryPreviewTile
