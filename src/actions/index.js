import { testMultiGroceryList } from './../components/config/test-groceries'

export const updateGroceries = () => async (dispatch) => {
  dispatch({
    type: 'updateGroceries',
    payload: testMultiGroceryList
  })
}

export const selectGrocery = (grocery) => async (dispatch) => {
  dispatch({
    type: 'selectGrocery',
    payload: grocery
  })
}
