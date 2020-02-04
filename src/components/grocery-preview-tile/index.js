import React from 'react'

const GroceryPreviewTile = (props) => {
  const g = props.grocery

  return(
    <div data-test="gpt-component">
    <h5 data-test="gpt-name">{g.name}</h5>
    <h7 data-test="gpt-amount">{g.amount} {g.measurement}</h7>
    <h7 data-test="gpt-price">£{g.price.toFixed(2)}</h7>
    </div>
  )

}

export default GroceryPreviewTile
