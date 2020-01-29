import React from 'react'
import { shallow } from 'enzyme'

import GroceryDetails from '.'
import { testSingleGrocery } from './../config/test-groceries'
import { findByDataTestAttr, checkProps } from './../config/test-utils'


const setUp = (props={}) => {
  return shallow(<GroceryDetails {...props} />)
}

describe('GroceryDetails Component', () => {

  describe('Has a grocery item as the grocery prop', () => {

    let component
    beforeEach(() => {
      component = setUp({grocery: testSingleGrocery})
    })

    it('Should render the grocery-details-container', () => {
      const wrapper = findByDataTestAttr(component, 'grocery-details-container')
      expect(wrapper.length).toBe(1)
    })

    it('Should render a title with the grocery title and weight', () => {
      const title = findByDataTestAttr(component, 'grocery-title')
      expect(title.length).toBe(1)
      expect(title.text()).toBe("Carrots (800 grams)")
    })

    it('Should render a grocery description', () => {
      const desc = findByDataTestAttr(component, 'grocery-desc')
      expect(desc.length).toBe(1)
      expect(desc.text()).toBe(testSingleGrocery.description)
    })

    // test for anchor needed
  })

  describe('Has no props', () => {
    it('Should not render', () => {
      const component = setUp()
      const wrapper = findByDataTestAttr(component, 'grocery-details-container')
      expect(wrapper.length).toBe(0)
    })
  })

  describe('Checking Prop Types', () => {
    it('Should not throw a warning', () => {
      const propsErr = checkProps(GroceryDetails, testSingleGrocery)
      expect(propsErr).toBeUndefined()
    })
  })
})
