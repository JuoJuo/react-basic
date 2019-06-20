import isPlainObject from "./utils/isPlainObject";
import ActionTypes from "./utils/actionTypes";

/**
 * 注意有两个地方可以传入初始的state，
 * 如果使用createStore传，dispatch({type:ActionTypes.INIT})写不写无所谓
 * 如果使用xxxReducer(state = {xxx}),那就必须调用一下dispatch({type:ActionTypes.INIT})
 *
 * 从代码来看，两个一起传，是createStore优先级高一些。因为 currentState = currentReducer(currentState, action);
 * currentState已经就是传入的初始值了
 * @param reducer
 * @param preLoadedState
 * @returns {{getState: (function(): *), dispatch: (function(*=): *), subscribe: (function(*=): unsubscribe)}}
 */
export default function createStore(reducer, preLoadedState) {

  if (typeof reducer !== 'function') {
    throw new Error('reducer必须是一个函数');
  }

  let currentReducer = reducer;
  let currentState = preLoadedState;
  let currentListeners = [];

  function getState() {
    return currentState;
  }


  /*
  *   明确dispatch的干的活儿，执行createStore传进来的reducer，把返回值重新赋给currentState
  *   然后执行订阅的方法
  * */
  function dispatch(action) {
    // action一定要是一个纯对象{type:'xx'}，大概是因为节约内存吧。原型链上连太多，传进来了也不会用
    if (!isPlainObject(action)) {
      throw new Error('action必须是一个纯对象');
    }

    if(typeof action.type === 'undefined'){
      throw new Error('action的type属性不能是 undefined');
    }

    currentState = currentReducer(currentState, action);

    for(let i = 0; i < currentListeners.length; i++){
      const listener = currentListeners[i];
      listener();
    }

    return action;
  }

  function subscribe(listener) {
    let subscribed = true;// 这一行因为是开源库嘛，所以害怕别人拿到unsubscribe反复执行，浪费性能
    currentListeners.push(listener);
    return function unsubscribe() {
      if(!subscribed) return ;// 这一行因为是开源库嘛，所以害怕别人拿到unsubscribe反复执行，浪费性能
      const index = currentListeners.indexOf(listener);
      currentListeners.splice(index,1);
      subscribed = false;// 这一行因为是开源库嘛，所以害怕别人拿到unsubscribe反复执行，浪费性能
    }
  }

  dispatch({type:ActionTypes.INIT});

  return  {
    getState,
    dispatch,
    subscribe,
  };
}
