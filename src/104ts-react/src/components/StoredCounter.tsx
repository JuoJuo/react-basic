import * as React from "react";
import { connect } from "react-redux";
import actions, {incrementAction,decrementAction} from "../store/actions/counter1Action";
import {RootState} from '../store/reducer/index';

// interface Props {
//   name: string,
//   counter1Number?: number,
//   increment?: (n:number) => incrementAction,
//   decrement?: (n:number) => decrementAction,
// }

// 上面的写法不灵活，由于属性由3部分构成，第一个是mapStateToProps的返回值的类型
// 第二个是actions的类型，第三个是自己外部传的
// 最后我们 & 合并一下就行了
type mapStateToPropsType = ReturnType<typeof mapStateToProps>;
type actionsType = typeof actions;
type custom = {
  name: string,
}
type Props = mapStateToPropsType & actionsType & custom;


class StoredCounter extends React.Component<Props> {
  render() {
    const { increment, decrement, counter1Number } = this.props;

    return (
      <>
        {this.props.name}:<p>{counter1Number}</p>
        <button onClick={() => increment(2)}>+</button>
        <button onClick={() => decrement(3)}>-</button>
      </>
    );
  }
}

const mapStateToProps = (state: RootState) => state.counterReducer1;

export default connect(
  mapStateToProps,
  actions
)(StoredCounter);
