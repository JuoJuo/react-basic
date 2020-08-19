import * as types from "../action-types";
import { ActionTypes } from "../actions/counter1Action";

const initState = {
  counter1Number: 0
};

export type Counter1State = typeof initState;

export default function(state: Counter1State = initState, action: ActionTypes): Counter1State {
  switch (action.type) {
    case types.INCREMENT:
      return { counter1Number: state.counter1Number + action.payload };
    case types.DECREMENT:
      return { counter1Number: state.counter1Number - action.payload };
    default:
      return state;
  }
}
