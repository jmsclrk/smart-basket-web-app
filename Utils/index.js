import rootReducer from './../src/reducers'
import { middlewares } from './../src/createStore'
import { applyMiddleware, createStore } from 'redux'

export const testStore = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
  return createStoreWithMiddleware(rootReducer, initialState)
}
