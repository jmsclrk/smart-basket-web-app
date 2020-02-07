import React from 'react'
import './styles.scss'
import { connect } from 'react-redux'

const QuantityController = (props) => {

  let inBasket = props.basketContents.find(b => b.grocery.id === props.grocery.id)

  return (
    <div data-test="qc-component">
      {inBasket ? (
        <React.Fragment>
          <div data-test="qc-decrement">
          -
          </div>
          <div data-test="qc-quantity">
            {inBasket.quantity}
          </div>
        </React.Fragment>
      ) : (
        <div>
        </div>
      )}
      <div data-test="qc-increment">
      +
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    basketContents: state.basketContents
    }
}

export default connect(mapStateToProps)(QuantityController)
