function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  }
}

/*
* 之前是：() => store.dispatch({type: xxx})
*
* 为了管理action也就是{type: xxx}，我们将action全转成了{ xxxaction: fn }这种形式，fn执行后返回之前的{type: xxx}
*
*
* bindActionCreators首先返回的是对象，对象里的每个属性都是函数，
* */
export default function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators == 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }
  const boundActionCreators = {};
  for (const key in actionCreators) {
    boundActionCreators[key] = bindActionCreator(actionCreators[key], dispatch);
  }
  return boundActionCreators;
}
