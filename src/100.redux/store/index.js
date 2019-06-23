import {createStore, applyMiddleware} from '../redux';
import reducers from './reducers';
import logger1 from './redux-logger1';
import logger2 from './redux-logger2';

// const store = createStore(reducers);
const store = applyMiddleware(logger1, logger2)(createStore)(reducers, 0);

export default store;
