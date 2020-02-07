export default (state=[], action) => {
  switch(action.type){
    case 'addItemToBasket':
      const bIndex = state.findIndex(bItem => bItem.grocery.id === action.payload.id)
      if(bIndex >= 0){
        state[bIndex].quantity += 1
      } else {
        state.push({quantity: 1, grocery: action.payload})
      }
      return Object.assign([], state)
    default:
      return state
  }
}
