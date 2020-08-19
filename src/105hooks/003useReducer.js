import React, { useState, useCallback, useMemo, useReducer } from "react";


const initialState = 0;

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
function init(initialState){
  return {number:initialState};
}

// 是useState的语法糖， 其实dispatch就是执行我们传进去的Reducer函数拿到最新的state，然后安排调度执行渲染
export function CounterUseReducer(){
  const [state, dispatch] = useReducer(reducer, initialState,init);
  return (
    <>
      Count: {state.number}
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
    </>
  )
}
