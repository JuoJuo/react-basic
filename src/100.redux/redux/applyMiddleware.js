import compose from './compose';

export default function applyMiddleware(...middlewares) {
  return (createStore) => (reducer) => {
    let store = createStore(reducer);
    let dispatch = () => {
      throw Error('现在还不能用!')
    };
    // 为啥不直接传store呢，因为害怕有人在写中间件的时候
    // 在第一层的函数里就使用dispatch方法(store) => {
    //   dispatch....
    //   return (dispatch) => (action) => {}
    // }
    const middlewareAPI = {
      getState: store.getState,
      dispatch: (...args) => dispatch(...args)
    };

    const chain = middlewares.map(middleware=>middleware(middlewareAPI));
    // [ (dispatch) => (action) => {  logic1  dispatch(action) logic2  },  ]
    // 这个地方的精妙就是，chain执行一次后，返回值还是一个函数，结果这个函数又被当参数，传给
    // 下一个中间件二阶函数
    // 我们发现从第二个dispatch开始就已经不是曾经的dispatch了
    // 跳出来看，(dispatch) => (action) => {  logic1  dispatch(action) logic2  }这个
    // 函数的作用就是在 参数（类型必须为function）前后加上逻辑后，返回一个一阶的函数
    dispatch = compose(...chain)(store.dispatch);

    return {
      ...store,
      dispatch,
    };
  }
}