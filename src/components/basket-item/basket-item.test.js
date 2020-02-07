import React from 'react'
import { shallow } from 'enzyme'
import QuantityController from './../quantity-controller'
import { testSingleGroceryBasket, testDuplicateItemGroceryBasket } from './../config/test-groceries'
import { findByDataTestAttr, checkProps } from './../config/test-utils'
import BasketItem from '.'

const setUp = (prps={}) => {
  const component = shallow(<BasketItem {...prps} />)
  return component
}

describe('BasketItem Component', () => {

  describe('BasketItem has quantity of one', () => {

    let component
    beforeEach(() => {
      component = setUp({basketItem: testSingleGroceryBasket[0]})
    })

    it('Should render basket item without error', () => {
      const wrapper = findByDataTestAttr(component, 'bi-component')
      expect(wrapper.length).toBe(1)
    })

    it('Should render the basket item information', () => {
      const info = findByDataTestAttr(component, 'bi-info')
      expect(info.length).toBe(1)
      expect(info.text()).toBe('Carrots')
    })

    it('Renders one QuantityController component', () => {
      const controller = component.find(QuantityController)
      expect(controller.length).toBe(1)
    })

    it('Renders product amount information', () => {
      const amount = findByDataTestAttr(component, 'bi-amount')
      expect(amount.length).toBe(1)
      expect(amount.text()).toBe('800 grams')
    })
  })

  describe('BasketItem has quantity of two', () => {

    let component
    beforeEach(() => {
      component = setUp({basketItem: testDuplicateItemGroceryBasket[0]})
    })

    it('Renders calculated price information to two decimal places', () => {
      const price = findByDataTestAttr(component, 'bi-price')
      expect(price.length).toBe(1)
      expect(price.text()).toBe('£3.00')
    })
  })
})
