import React from 'react'
import QuantityController from './../quantity-controller'
import './styles.scss'

const BasketItem = (props) => {

  const qty = props.basketItem.quantity
  const grcy = props.basketItem.grocery

  return (
    <div id="bi-container" data-test="bi-component">
      <QuantityController loc="bskt" grocery={grcy} />
      <span className="bi-info" data-test="bi-info">{grcy.name}</span>
      <span className="bi-price" data-test="bi-price">£{(qty*grcy.price).toFixed(2)}</span>
      <br/>
      <span className="bi-amount" data-test="bi-amount">{grcy.amount} {grcy.measurement}</span>
    </div>
  )
}

export default BasketItem
