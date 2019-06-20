import * as types from '../action-types';

export default {
  increment(value) {
    return {type: types.INCREMENT1, payload: value};
  },
  decrement() {
    return {type: types.DECREMENT1};
  }
}
