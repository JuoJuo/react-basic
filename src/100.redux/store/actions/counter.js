import * as types from '../action-types';

export default {
  increment(value) {
    return {type: types.INCREMENT, payload: value};
  },
  decrement() {
    return {type: types.DECREMENT};
  },
  asyncIncrement(value) {
    return function (dispatch, getState) {
      setTimeout(() => {
        dispatch({type: types.ASYNC_INCREMENT, payload: value});
      }, 1000);
    }
  }
}
