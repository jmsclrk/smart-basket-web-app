import React from 'react'
import './styles.scss'

const GroceryPreviewTile = (props) => {
  const g = props.grocery

  return(
    <div data-test="gpt-component" className="gpt-container">
    <h5 className="gpt-n" data-test="gpt-name">{g.name}</h5>
    <span className="gpt-a" data-test="gpt-amount">{g.amount} {g.measurement}</span><br/>
    <div className="gpt-img">
    </div>
    <span className="gpt-p" data-test="gpt-price">£{g.price.toFixed(2)}</span>
    <span className="gpt-add-basket">+</span>
    </div>
  )

}

export default GroceryPreviewTile
