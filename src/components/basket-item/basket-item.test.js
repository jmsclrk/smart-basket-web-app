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

  describe('Should render without errors', () => {

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
      expect(info.text()).toBe('1 x Carrots')
    })

    it('Should correctly render if two of one grocery', () => {
      component = setUp({basketItem: testDuplicateItemGroceryBasket[0]})
      const info = findByDataTestAttr(component, 'bi-info')
      expect(info.length).toBe(1)
      expect(info.text()).toBe('2 x Carrots')
    })

    it('Renders one QuantityController component', () => {
      const controller = component.find(QuantityController)
      expect(controller.length).toBe(1)
    })

  })
})
