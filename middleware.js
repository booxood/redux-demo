export function logger({getState, dispatch}) {
  // dispatch({type: 'ADD'})
  return (next) => {
    return (action) => {
      console.info('will dispatch:', action)

      // 调用 middleware 链中下一个 middleware 的 dispatch
      let returnValue = next(action)
      
      // 如果把 logger 放在 thunk 前面，这里会被执行两次，why？
      console.info('state after dispatch:', getState())

      // 一般会是 action 本身，除非被后续的 middleware 修改了
      return returnValue
    }
  }
}
