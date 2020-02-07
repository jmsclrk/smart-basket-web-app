import React from 'react'
import { shallow } from 'enzyme'
import QuantityController from '.'
import { testSingleGrocery, testDuplicateItemGroceryBasket } from './../config/test-groceries'
import { findByDataTestAttr } from './../config/test-utils'
import { testStore } from './../../../Utils'

const setUp = (props={}, initialState={}) => {
  const store = testStore(initialState)
  const component = shallow(<QuantityController store={store} {...props} />).childAt(0).dive()
  return component
}

describe('QuantityController Component', () => {

  describe('Grocery is not present in basket', () => {

    let component
    beforeEach(() => {
      component = setUp({grocery: testSingleGrocery})
    })

    it('Renders without errors', () => {
      const wrapper = findByDataTestAttr(component, 'qc-component')
      expect(wrapper.length).toBe(1)
    })

    it('Renders the increment item button', () => {
      const increment = findByDataTestAttr(component, 'qc-increment')
      expect(increment.length).toBe(1)
    })

    it('Does not render increment the decrement item button', () => {
      const decrement = findByDataTestAttr(component, 'qc-decrement')
      expect(decrement.length).toBe(0)
    })

    it('Does not render quantity in basket div', () => {
      const quantity = findByDataTestAttr(component, 'qc-quantity')
      expect(quantity.length).toBe(0)
    })
  })

  describe('Grocery is present in basket', () => {

    let component
    beforeEach(() => {
      component = setUp({grocery: testSingleGrocery}, {basketContents: testDuplicateItemGroceryBasket})
    })

    it('Renders without errors', () => {
      const wrapper = findByDataTestAttr(component, 'qc-component')
      expect(wrapper.length).toBe(1)
    })

    it('Renders the increment item button', () => {
      const increment = findByDataTestAttr(component, 'qc-increment')
      expect(increment.length).toBe(1)
    })

    it('Renders increment the decrement item button', () => {
      const decrement = findByDataTestAttr(component, 'qc-decrement')
      expect(decrement.length).toBe(1)
    })

    it('Renders increment the quantity in basket div', () => {
      const quantity = findByDataTestAttr(component, 'qc-quantity')
      expect(quantity.length).toBe(1)
    })
  })
})
