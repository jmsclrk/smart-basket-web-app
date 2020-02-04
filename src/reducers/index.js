import { combineReducers } from 'redux'
import groceriesList from './groceriesList'
import selectedGrocery from './selectedGrocery'

export default combineReducers({
  groceriesList,
  selectedGrocery
})
