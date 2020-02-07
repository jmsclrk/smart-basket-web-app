import React from 'react';
import './styles.scss'
import { connect } from 'react-redux'
import BasketItem from './../basket-item'

const Basket = (props) => {
  return (
    <div id="basket-component" data-test="bskt-component">
      <h4 className="basket-title" data-test="bskt-title">BASKET</h4>
      { props.basketContents.length < 1 ? (
        <h6 data-test="bskt-empty-message">Nothing added yet.</h6>
      ) : (
        <React.Fragment>
          { props.basketContents.map((bi, index) => {
            return <BasketItem key={index} basketItem={bi} />
          })}
        </React.Fragment>
      )}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    basketContents: state.basketContents
  }
}

export default connect(mapStateToProps)(Basket)
