import * as types from "../action-types";
import { push } from "connected-react-router";

// action返回值的类型，自己定义
export interface incrementAction {
  type: typeof types.INCREMENT;
  payload: number;
}
export interface decrementAction {
  type: typeof types.DECREMENT;
  payload: number;
}

// 我们知道源码中，这个返回的对象，到了reducer可能是他们俩的任意一个，所以我们写了或者
export type ActionTypes = incrementAction | decrementAction;

export default {
  increment(n: number): incrementAction {
    return { type: types.INCREMENT, payload: n };
  },
  decrement(n: number): decrementAction {
    return { type: types.DECREMENT, payload: n };
  },
  goto(to: string){
    return push(to);
  }
};
