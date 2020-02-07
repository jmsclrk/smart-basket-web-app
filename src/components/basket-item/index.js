import React from 'react'
import QuantityController from './../quantity-controller'
import './styles.scss'

const BasketItem = (props) => {

  const qty = props.basketItem.quantity
  const grcy = props.basketItem.grocery

  return (
    <div data-test="bi-component">
      <span data-test="bi-info">{qty} x {grcy.name}</span>
      <QuantityController grocery={grcy} />
    </div>
  )
}

export default BasketItem
