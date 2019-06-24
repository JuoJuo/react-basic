import {createStore, applyMiddleware} from '../redux';
import reducers from './reducers';
import logger1 from './redux-logger1';
import thunk from './redux-thunk';

// const store = createStore(reducers);
const store = applyMiddleware(thunk, logger1)(createStore)(reducers, 0);

export default store;
