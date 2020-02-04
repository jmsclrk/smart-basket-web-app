export default (state=[], action) => {
  switch(action.type){
    case 'addItemToBasket':
      const bIndex = state.findIndex(bItem => bItem.grocery === action.payload)
      if(bIndex >= 0){
        state[bIndex].quantity += 1
      } else {
        state.push({quantity: 1, grocery: action.payload})
      }
      return state
    default:
      return state
  }
}
