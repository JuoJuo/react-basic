import { combineReducers } from "redux";
import counterReducer1 from "./counterReducer1";
import {connectRouter} from 'connected-react-router';
import history from '../history';

const reducers = {
  counterReducer1,
  router:connectRouter(history)
};

export type RootState = {
  [key in keyof typeof reducers]: ReturnType<typeof reducers[key]>
};

export default combineReducers(reducers);
