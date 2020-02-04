export default (state=null, action) => {
  switch(action.type){
    case 'selectGrocery':
      return action.payload
    default:
      return state
  }
}
