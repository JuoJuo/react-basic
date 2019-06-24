function createThunkMiddleware(extraArgument) {
  // 我为什么重命名fullWrappedDispatch， particialWrappedDispatch
  // 因为applyMiddleware执行完后，再具体点，就是在compose那一行没执行完之前，dispatch都还是一个throw error的函数
  // 就是在compose那一行没执行完之后，由于是引用传递，dispatch就变成了一个组合了所有中间件后的函数fullWrappedDispatch
/*  function fullWrappedDispatch(...args) {
    const fninner =  (action) => {
      console.log('老状态1', store.getState());
      dispatch(action);
      console.log('新状态1', store.getState());
    };

    (action) => {
      if (true) {
        fninner(action);
      } else {
        //不满足条件，我就不调用logger包裹后的东西了
        action(fullWrappedDispatch)
      }
    }(...args)
  }*/
  return ({dispatch:fullWrappedDispatch, getState}) => (particialWrappedDispatch) => (action) => {
    if (typeof action === 'function') {
      action(fullWrappedDispatch, getState, extraArgument);
    } else {
      particialWrappedDispatch(action);
    }
  };
}

const thunk = createThunkMiddleware();
//如果想传参数，就thunk.withExtraArgument('param')
thunk.withExtraArgument = createThunkMiddleware;
export default thunk;
