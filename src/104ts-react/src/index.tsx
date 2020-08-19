import * as React from "react";
import * as ReactDOM from "react-dom";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";
import Counter from "./components/Counter";
import StoredCounter from "./components/StoredCounter";
import { Provider } from "react-redux";
import { Route, Link } from "react-router-dom";
import store from "./store";
/**
 * 1.在仓库中保存当前的路径状态
 * 2.如果我们希望在action中跳转路径，希望用派发动作的方式跳转路径的话
 */
import {ConnectedRouter} from 'connected-react-router';
import history from './store/history';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <>
        <Link to="/a">按钮1</Link>
        <Link to="/b">按钮2</Link>
        <Link to="/c">按钮3</Link>
        <Link to="/d">按钮4</Link>
        <hr/>
        <Route
          path="/a"
          component={() => <Counter name="不带redux的counter" />}
        />
        <Route
          path="/b"
          component={() => <TodoItem title="函数组件的ts示例" />}
        />
        <Route
          path="/c"
          component={() => <StoredCounter name="带有redux的counter" />}
        />
        <Route path="/d" component={() => <TodoInput />} />
      </>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
