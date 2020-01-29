import React from 'react'
import PropTypes from 'prop-types'

const GroceryList = (props) => {
  let groceries = props.groceries

  const selectGrocery = (grocery) => {
    props.selectGrocery(grocery)
  }


  if (groceries) {
    return (
      <div data-test="grocery-list-container">
        <h1>Groceries</h1>
        { groceries.map((grocery) => {
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

GroceryList.propTypes = {
  groceries: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    amount: PropTypes.number,
    measurement: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string
  }))
}

export default GroceryList
