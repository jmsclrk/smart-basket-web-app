export default (state=null, action) => {
  switch(action.type){
    case 'selectGrocery':
      return action.payload
    case 'deselectGrocery':
      return null
    default:
      return state
  }
}
