import selectedGroceryReducer from '.'
import { testSingleGrocery } from './../../components/config/test-groceries'

describe('selectedGrocery Reducer', () => {

  it('Should return defualt state', () => {
    const newState = selectedGroceryReducer(undefined, {})
    expect(newState).toEqual(null)
  })

  it('Should return new state if receiving type', () => {
    const newState = selectedGroceryReducer(undefined, {
      type: 'selectGrocery',
      payload: testSingleGrocery
    })
    expect(newState).toEqual(testSingleGrocery)
  })
})
