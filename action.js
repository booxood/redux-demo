export function thunkAction() {
  return function(dispatch) {
    return new Promise((resolve, reject) => resolve(dispatch({type: 'ADD'})))
  }
}
