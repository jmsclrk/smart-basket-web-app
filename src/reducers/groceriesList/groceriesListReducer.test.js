import groceriesListReducer from '.'
import { testMultiGroceryList } from './../../components/config/test-groceries'

describe('GroceriesList Reducer', () => {

  it('Should return defualt state', () => {
    const newState = groceriesListReducer(undefined, {})
    expect(newState).toEqual([])
  })

  it('Should return new state if receiving type', () => {
    const newState = groceriesListReducer(undefined, {
      type: 'updateGroceries',
      payload: testMultiGroceryList
    })
    expect(newState).toEqual(testMultiGroceryList)
  })
})
