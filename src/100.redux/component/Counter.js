import React, {Component} from "react";
import {connect} from '../react-redux';
import actions from '../store/actions/counter';

class Counter extends Component {
  render() {
    return <div>
      <p>{this.props.counter.number}</p>
      <button onClick={() => this.props.increment(2)}>+</button>
    </div>;
  }
}

// connect（跑1，喷2）第二个参数，既可以有很多种类型这里再模拟一种，mapDispatchToProps
const mapDispatchToProps = (dispatch) => {
  return {
    increment: (...args) => dispatch(actions.increment(...args)),
    decrement: (...args) => dispatch(actions.decrement(...args))
  }
};

export default connect(state => state, actions)(Counter);
