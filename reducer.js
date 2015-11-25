export function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat(action.text)
    case 'POP_TODO':
      return state.slice(0, -1)
    default:
      return state
  }
}

export function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

export function add(state = 0, action) {
  switch (action.type) {
    case 'ADD':
      return state + 1;
    default:
      return state;
  }
}
