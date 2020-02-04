import React from 'react'
import './styles.scss'
import GroceryPreviewTile from './../grocery-preview-tile'
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
        { props.groceriesList.map((grocery, index) => {
          return (
            <GroceryPreviewTile key={index} grocery={grocery} />
          )
        })}
      </div>
    )
  } else {
    return (
      <div id="grocery-list-component">
        <h1 data-test="no-groceries-warning">No groceries currently available.</h1>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    groceriesList: state.groceriesList
  }
}

export default connect(mapStateToProps, {selectGrocery})(GroceryList)
