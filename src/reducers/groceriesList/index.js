export default (state=[], action) => {
  switch(action.type){
    case 'updateGroceries':
      return action.payload
    default:
      return state
  }
}
