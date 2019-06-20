import {createStore} from '../redux';
import reducers from './reducers/Counter.js';

const store = createStore(reducers);

export default store;
