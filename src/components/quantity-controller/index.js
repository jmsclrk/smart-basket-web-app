import React from 'react'
import './styles.scss'
import { connect } from 'react-redux'
import { addItemToBasket, removeItemFromBasket } from './../../actions'

const QuantityController = (props) => {

  let inBasket = props.basketContents.find(b => b.grocery.id === props.grocery.id)

  return (
    <div id={`qc-container-${props.loc}`} data-test="qc-component">
      {inBasket ? (
        <React.Fragment>
          <div
            className="qc-decrement"
            data-test="qc-decrement"
            onClick={() => {props.removeItemFromBasket(props.grocery)}}
          >
          -
          </div>
          <div className="qc-quantity" data-test="qc-quantity">
            {inBasket.quantity}
          </div>
        </React.Fragment>
      ) : (
        <div className="absent-basket">

        </div>
      )}
      <div
        className="qc-increment"
        data-test="qc-increment"
        onClick={() => {props.addItemToBasket(props.grocery)}}
      >
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
