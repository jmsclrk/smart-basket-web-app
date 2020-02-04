import React from 'react'
import { shallow } from 'enzyme'

import GroceryList from '.'
import GroceryPreviewTile from './../grocery-preview-tile'
import { testSingleGroceryList, testMultiGroceryList } from './../config/test-groceries'
import { findByDataTestAttr } from './../config/test-utils'
import { testStore } from './../../../Utils'

const setUp = (initialState={}) => {
  const store = testStore(initialState)
  const component = shallow(<GroceryList store={store} />).childAt(0).dive()
  return component
}

describe('GroceryList Component', () => {

  describe('Has no props', () => {

    let component
    beforeEach(() => {
      component = setUp()
    })

    it('Should not render the groceries list container', () => {
      const wrapper = findByDataTestAttr(component, 'grocery-list-container')
      expect(wrapper.length).toBe(0)
    })

    it('Should render a title message with a no groceries message', () => {
      const title = findByDataTestAttr(component, 'no-groceries-warning')
      expect(title.length).toBe(1)
      expect(title.text()).toBe("No groceries currently available.")
    })
  })

  describe('Has a single grocery in list as grocery prop', () => {

    let component
    beforeEach(() => {
      component = setUp({groceriesList: testSingleGroceryList})
    })

    it('Should render the groceries list container', () => {
      const wrapper = findByDataTestAttr(component, 'grocery-list-container')
      expect(wrapper.length).toBe(1)
    })

    it('Should render one grocery tile', () => {
      const tiles = component.find(GroceryPreviewTile)
      expect(tiles.length).toBe(1)
    })
  })

  describe('Has a multiple groceries in list as grocery prop', () => {

    let component
    beforeEach(() => {
      component = setUp({groceriesList: testMultiGroceryList})
    })

    it('Should render the groceries list container', () => {
      const wrapper = findByDataTestAttr(component, 'grocery-list-container')
      expect(wrapper.length).toBe(1)
    })

    it('Should render two grocery tiles', () => {
      const tiles = component.find(GroceryPreviewTile)
      expect(tiles.length).toBe(2)
    })
  })
})
