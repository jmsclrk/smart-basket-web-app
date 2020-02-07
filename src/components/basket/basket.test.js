import React from "react";
import Basket from ".";
import BasketItem from './../basket-item'
import { testSingleGroceryBasket, testMultiGroceryBasket } from './../config/test-groceries'
import { shallow } from 'enzyme'
import { findByDataTestAttr } from './../config/test-utils'
import { testStore } from './../../../Utils'

const setUp = (initialState={}) => {
  const store = testStore(initialState)
  const component = shallow(<Basket store={store} />).childAt(0).dive()
  return component
}

describe('Basket Component', () => {

  describe('No basket contents', () => {

    let component
    beforeEach(() => {
      component = setUp()
    })

    it('Should render basket component without errors', () => {
      const wrapper = findByDataTestAttr(component, 'bskt-component')
      expect(wrapper.length).toBe(1)
    })

    it('Should render basket title', () => {
      const title = findByDataTestAttr(component, 'bskt-title')
      expect(title.length).toBe(1)
      expect(title.text()).toBe('BASKET')
    })

    it('Should render "Nothing added yet." message', () => {
      const message = findByDataTestAttr(component, 'bskt-empty-message')
      expect(message.length).toBe(1)
      expect(message.text()).toBe('Nothing added yet.')
    })
  })

  describe('Basket is not empty', () => {

    let component
    beforeEach(() => {
      component = setUp({basketContents: testSingleGroceryBasket})
    })

    it('Should render basket component without errors', () => {
      const wrapper = findByDataTestAttr(component, 'bskt-component')
      expect(wrapper.length).toBe(1)
    })

    it('Should render basket title', () => {
      const title = findByDataTestAttr(component, 'bskt-title')
      expect(title.length).toBe(1)
      expect(title.text()).toBe('BASKET')
    })

    it('Should NOT render "Nothing added yet." message', () => {
      const message = findByDataTestAttr(component, 'bskt-empty-message')
      expect(message.length).toBe(0)
    })

    it('Should render BasketItem component', () => {
      const item = component.find(BasketItem)
      expect(item.length).toBe(1)
    })
  })
})
