import React from 'react'
import { shallow } from 'enzyme'

import GroceryPreviewTile from '.'
import { testSingleGrocery } from './../config/test-groceries'
import { findByDataTestAttr, checkProps } from './../config/test-utils'



describe('GroceryPreviewTile Component', () => {

  describe('Component renders', () => {

    let wrapper
    beforeEach(() => {
      const props = {
        grocery: testSingleGrocery
      }
      wrapper = shallow(<GroceryPreviewTile {...props} />)
    })

    it('Renders without errors', () => {
      const component = findByDataTestAttr(wrapper, 'gpt-component')
      expect(component.length).toBe(1)
    })

    it('Renders a grocery name', () => {
      const name = findByDataTestAttr(wrapper, 'gpt-name')
      expect(name.length).toBe(1)
      expect(name.text()).toBe("Carrots")
    })

    it('Renders a grocery amount with units', () => {
      const g = testSingleGrocery
      const amount = findByDataTestAttr(wrapper, 'gpt-amount')
      expect(amount.length).toBe(1)
      expect(amount.text()).toBe(`${g.amount} ${g.measurement}`)
    })

    it('Renders a grocery price to 2 decimal places and a £ sign', () => {
      const price = findByDataTestAttr(wrapper, 'gpt-price')
      expect(price.length).toBe(1)
      expect(price.text()).toBe('£1.50')
    })
  })

  describe('Checking Prop Types', () => {
    it('Should not throw a warning', () => {
      const propsErr = checkProps(GroceryPreviewTile, testSingleGrocery)
      expect(propsErr).toBeUndefined()
    })
  })
})
