export default (state=[], action) => {
  let bIndex
  switch(action.type){
    case 'addItemToBasket':
      bIndex = state.findIndex(bItem => bItem.grocery.id === action.payload.id)
      if(bIndex >= 0){
        state[bIndex].quantity += 1
      } else {
        state.push({quantity: 1, grocery: action.payload})
      }
      return Object.assign([], state)
    case 'removeItemFromBasket':
      bIndex = state.findIndex(bItem => bItem.grocery.id === action.payload.id)
      if(bIndex >= 0){ state[bIndex].quantity -= 1 }
      if(state[bIndex].quantity <= 0) { state.splice(bIndex, 1) }
      return Object.assign([], state)
    default:
      return state
  }
}
