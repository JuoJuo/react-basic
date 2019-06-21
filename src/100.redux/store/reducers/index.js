import counter from './Counter';
import {combineReducers} from '../../redux';

let reducers = combineReducers({
  counter,
});

export default reducers;
