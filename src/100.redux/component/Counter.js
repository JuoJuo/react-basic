import React, {Component} from "react";
import store from '../store';
import { bindActionCreators } from '../redux';
import actions from '../store/actions/Counter';

let boundActions = bindActionCreators(actions, store.dispatch);

export default class Counter extends Component {

  constructor() {
    super();
    this.state = {
      number: 0,
    };
  }
  componentDidMount() {
    store.subscribe(() => {
      this.setState({number: store.getState().number});
    });
  }

  render() {
    return <div>
      <p>{this.state.number}</p>
      <button onClick={boundActions.increment}>+</button>
    </div>;
  }
}
