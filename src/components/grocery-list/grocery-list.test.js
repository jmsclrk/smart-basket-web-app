import React from 'react'
import { shallow } from 'enzyme'

import GroceryList from '.'
import { testSingleGroceryList, testMultiGroceryList } from './../config/test-groceries'
import { findByDataTestAttr, checkProps } from './../config/test-utils'

const setUp = (props={}) => {
  const component = shallow(<GroceryList {...props} />)
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
      component = setUp({groceries: testSingleGroceryList})
    })

    it('Should render the groceries list container', () => {
      const wrapper = findByDataTestAttr(component, 'grocery-list-container')
      expect(wrapper.length).toBe(1)
    })

    it('Should render one grocery tile', () => {
      const tile = findByDataTestAttr(component, 'grocery-preview-tile')
      expect(tile.length).toBe(1)
    })

    it('Should render preview price with a £ sign and to 2 decimals', () => {
      const price = findByDataTestAttr(component, 'g-prev-price')
      expect(price.text()).toBe('£1.50')
    })
  })

  describe('Has a multiple groceries in list as grocery prop', () => {

    let component
    beforeEach(() => {
      component = setUp({groceries: testMultiGroceryList})
    })

    it('Should render the groceries list container', () => {
      const wrapper = findByDataTestAttr(component, 'grocery-list-container')
      expect(wrapper.length).toBe(1)
    })

    it('Should render two grocery tiles', () => {
      const tile = findByDataTestAttr(component, 'grocery-preview-tile')
      expect(tile.length).toBe(2)
    })
  })

  describe('Checking Prop Types', () => {
    it('Should not throw a warning', () => {
      const propsErr = checkProps(GroceryList, testMultiGroceryList)
      expect(propsErr).toBeUndefined()
    })
  })
})
