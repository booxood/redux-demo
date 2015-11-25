import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { todos, counter, add } from './reducer'
import { logger } from './middleware'
import { thunkAction } from './action'

// 合并 reducer
// let counters = combineReducers({
//   counter,
//   add
// })
//
// let reducers = combineReducers({
//   todos,
//   counters
// })

// 应用 middleware
let createStoreWithMiddleware = applyMiddleware(...[thunk, logger])(createStore);
let store = createStoreWithMiddleware(add)
console.log('s0:', store.getState())

let unsubscribe = store.subscribe(() => {
  console.log('store.subscribe:', store.getState())
})

// store.dispatch({
//   type: 'ADD_TODO',
//   text: 'add 1'
// })
// store.dispatch({
//   type: 'INCREMENT'
// })
// store.dispatch({
//   type: 'ADD'
// })
store.dispatch(thunkAction()).then(() => console.log('done:', store.getState()))
console.log('s1:', store.getState())

// unsubscribe()
// console.log('unsubscribe')

// store.dispatch({
//   type: 'ADD_TODO',
//   text: 'add 2'
// })
// console.log('s2:', store.getState())
