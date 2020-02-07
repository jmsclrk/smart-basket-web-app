import basketContentsReducer from '.'
import { testSingleGrocery, testSingleGrocery2, testSingleGroceryBasket, testMultiGroceryBasket, testDuplicateItemGroceryBasket } from './../../components/config/test-groceries'

describe('BasketContents Reducer', () => {

  describe('No action type', () => {
    it('Should return a default state', () => {
      const newState = basketContentsReducer(undefined, {})
      expect(newState).toEqual([])
    })
  })

  describe('addItemToBasket action type', () => {
    it('Should add element to basket array with addGrocery type', () => {
      const newState = basketContentsReducer(undefined, {
        type: 'addItemToBasket',
        payload: testSingleGrocery
      })
      expect(newState).toEqual(testSingleGroceryBasket)
    })

    it('Should add additional elements to array using addGrocery type', () => {
      const newState = basketContentsReducer([{quantity: 1, grocery: testSingleGrocery}], {
        type: 'addItemToBasket',
        payload: testSingleGrocery2
      })
      expect(newState).toEqual(testMultiGroceryBasket)
    })

    it('Should update quantity of existing element using addGrocery type', () => {

      let newState = basketContentsReducer(undefined, {
        type: 'addItemToBasket',
        payload: testSingleGrocery
      })

      newState = basketContentsReducer(newState, {
        type: 'addItemToBasket',
        payload: testSingleGrocery
      })
      expect(newState).toEqual([{quantity: 2, grocery: testSingleGrocery}])
    })
  })

  describe('removeItemFromBasket action type', () => {

    it('Should add element to basket array with addGrocery type', () => {
      const newState = basketContentsReducer([{quantity: 1, grocery: testSingleGrocery}], {
        type: 'removeItemFromBasket',
        payload: testSingleGrocery
      })
      expect(newState).toEqual([])
    })

    it('Should reduce quantity of duplicate items in basket array with removeGrocery type', () => {
      const newState = basketContentsReducer(testDuplicateItemGroceryBasket, {
        type: 'removeItemFromBasket',
        payload: testSingleGrocery
      })
      expect(newState).toEqual([{quantity: 1, grocery: testSingleGrocery}])
    })
  })
})
