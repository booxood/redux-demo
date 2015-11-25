function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat(action.text)
    case 'POP_TODO':
      return state.slice(0, -1)
    default:
      return state
  }
}

export default todos
