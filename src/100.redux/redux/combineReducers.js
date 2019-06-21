/*
* reducer本身是一个函数，返回值是state，但是由于需要拆分好管理，就出现了combineReducers
* (不要忘了reducer接收两个参数)
* 单个reducer是一个个函数
* combineReducers接收的是一个对象，这个对象就是{reducer1: fn, reducer2: fn2}
*
* combineReducers处理过后的返回值，就是一个函数，这函数的功能就是：遍历这个对象，
* 并且执行(传入state,这个state是他命名空间对应的上一次的state，跟action)，将返回值
* 赋给一个对象，｛keyofReducer: particialState, keyofReducer2: particialState｝
*
* */
export default function(reducers){
  const reducerKeys = Object.keys(reducers);
  return function (state={}, action) {
    const nextState = {};
    for (let i = 0; i< reducerKeys.length; i++) {
      const key = reducerKeys[i];
      const reducer = reducers[key];
      const previousStateForKey = state[key];
      const nextStateForKey = reducer(previousStateForKey, action);
      nextState[key] = nextStateForKey;
    }
    return nextState;
  }
}
