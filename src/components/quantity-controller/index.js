import React from 'react'
import './styles.scss'
import { connect } from 'react-redux'
import { addItemToBasket, removeItemFromBasket } from './../../actions'

const QuantityController = (props) => {

  let inBasket = props.basketContents.find(b => b.grocery.id === props.grocery.id)

  return (
    <div data-test="qc-component">
      {inBasket ? (
        <React.Fragment>
          <div data-test="qc-decrement" onClick={() => {props.removeItemFromBasket(props.grocery)}}>
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
      <div data-test="qc-increment" onClick={() => {props.addItemToBasket(props.grocery)}}>
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

export default connect(mapStateToProps, {addItemToBasket, removeItemFromBasket})(QuantityController)
