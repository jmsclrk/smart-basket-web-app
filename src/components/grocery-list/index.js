import React from 'react'
import './styles.scss'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { selectGrocery } from './../../actions'

const GroceryList = (props) => {

  const selectGrocery = (grocery) => {
    props.selectGrocery(grocery)
  }


  if (props.groceriesList.length > 0) {
    return (
      <div data-test="grocery-list-container" id="grocery-list-component">
        <h4 className="grocery-title">ALL GROCERIES</h4>
        { props.groceriesList.map((grocery) => {
          return (
            <div
              data-test="grocery-preview-tile"
              id={`grocery-${grocery.id}`}
              key={String(grocery.id)}
              onClick={() => selectGrocery(grocery)}
            >
              <h2>{grocery.name} - {grocery.amount} {grocery.measurement}</h2>
              <strong data-test="g-prev-price">£{grocery.price.toFixed(2)}</strong>
            </div>
          )
        })}
      </div>
    )
  } else {
    return <h1 data-test="no-groceries-warning">No groceries currently available.</h1>;
  }
}

const mapStateToProps = state => {
  return {
    groceriesList: state.groceriesList
  }
}

export default connect(mapStateToProps, {selectGrocery})(GroceryList)
