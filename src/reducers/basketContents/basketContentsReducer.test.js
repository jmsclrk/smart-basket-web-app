import basketContentsReducer from '.'
import { testSingleGrocery, testSingleGrocery2, testSingleGroceryBasket, testMultiGroceryBasket, testDuplicateItemGroceryBasket } from './../../components/config/test-groceries'

describe('BasketContents Reducer', () => {

  it('Should return default state', () => {
    const newState = basketContentsReducer(undefined, {})
    expect(newState).toEqual([])
  })

  it('Should add element to basket array with addGrocery type', () => {
    const newState = basketContentsReducer(undefined, {
      type: 'addItemToBasket',
      payload: testSingleGrocery
    })
    expect(newState).toEqual(testSingleGroceryBasket)
  })

  it('Should add additional elements to array using addGrocery type', () => {
    const newState = basketContentsReducer(testSingleGroceryBasket, {
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
    expect(newState).toEqual(testDuplicateItemGroceryBasket)
  })
})
