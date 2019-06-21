import React, {Component} from "react";
import store from '../store';
import { bindActionCreators } from '../redux';
import actions from '../store/actions/counter';

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
      console.log(store.getState());
      this.setState({number: store.getState().counter.number});
    });
  }

  render() {
    return <div>
      <p>{this.state.number}</p>
      <button onClick={ () => boundActions.increment(2)}>+</button>
    </div>;
  }
}
