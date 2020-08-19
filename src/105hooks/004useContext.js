import React, { useState, useCallback, useMemo, useReducer, useContext } from "react";


const CounterContext = React.createContext();

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {number: state.number + 1};
    case 'decrement':
      return {number: state.number - 1};
    default:
      throw new Error();
  }
}
function Counter(){
  // 实现一看就知道给CounterContext加个属性，指向value属性对应的的对象
  // useContext就去取那个属性就完了
  let {state,dispatch} = useContext(CounterContext);
  return (
    <>
      <p>{state.number}</p>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
    </>
  )
}

// useContext的作用就是让子组件能取到祖先的state跟dispatch方法

// 实现一看就知道给CounterContext加个属性，指向value属性对应的的对象
export function App(){
  const [state, dispatch] = useReducer(reducer, {number:0});
  return (
    <CounterContext.Provider value={{state,dispatch}}>
      <Counter/>
    </CounterContext.Provider>
  )

}
