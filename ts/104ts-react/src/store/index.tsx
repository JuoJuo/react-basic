import reducers from "./reducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import { routerMiddleware } from "connected-react-router";
import history from "./history";

const router = routerMiddleware(history);

// export default createStore(reducers, applyMiddleware(thunk, logger))

export default applyMiddleware(thunk, router, logger)(createStore)(reducers);
