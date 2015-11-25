import { createStore } from 'redux'
import todos from './reducer'

let store = createStore(todos, [])
console.log('s0:', store.getState())

let unsubscribe = store.subscribe(() => {
  console.log('store.subscribe:', store.getState())
})

store.dispatch({
  type: 'ADD_TODO',
  text: 'add 1'
})
console.log('s1:', store.getState())

unsubscribe()
console.log('unsubscribe')

store.dispatch({
  type: 'ADD_TODO',
  text: 'add 2'
})
console.log('s2:', store.getState())
