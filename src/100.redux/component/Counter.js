import React, {Component} from "react";
import store from '../store';

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
      <button onClick={() => store.dispatch({type: 'add'})}>+</button>
    </div>;
  }
}
