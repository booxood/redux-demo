import { createStore, combineReducers } from 'redux'
import { todos, counter, add } from './reducer'

let counters = combineReducers({
  counter,
  add
})

let reducers = combineReducers({
  todos,
  counters
})

let store = createStore(reducers)
console.log('s0:', store.getState())

let unsubscribe = store.subscribe(() => {
  console.log('store.subscribe:', store.getState())
})

store.dispatch({
  type: 'ADD_TODO',
  text: 'add 1'
})
store.dispatch({
  type: 'INCREMENT'
})
store.dispatch({
  type: 'ADD'
})
console.log('s1:', store.getState())

unsubscribe()
console.log('unsubscribe')

store.dispatch({
  type: 'ADD_TODO',
  text: 'add 2'
})
console.log('s2:', store.getState())
