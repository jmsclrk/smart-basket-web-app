import { combineReducers } from 'redux'
import groceriesList from './groceriesList'
import selectedGrocery from './selectedGrocery'
import basketContents from './basketContents'


export default combineReducers({
  groceriesList,
  selectedGrocery,
  basketContents
})
