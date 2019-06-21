import * as types from '../action-types';

export default function counterReducer(state={number: 0}, action) {
  switch (action.type) {
    case types.INCREMENT:
      return { number: state.number + action.payload };
    case types.DECREMENT:
      return { number: state.number - 1 };
    default:
      return state;
  }
}
