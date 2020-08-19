import * as React from 'react';
import { connect } from 'react-redux';
import actions from "../store/actions/counter1Action";
import {RootState} from '../store/reducer/index';


type mapStateToPropsType = ReturnType<typeof mapStateToProps>;
type actionsType = typeof actions;
type Props = mapStateToPropsType & actionsType;

class TodoInput extends React.Component<Props> {

    render(){
        return <button onClick={()=>this.props.goto('/a')}>在store中跳转</button>
    }
}

const mapStateToProps = (state: RootState) => state.counterReducer1;

export default connect(
    mapStateToProps,
    actions
)(TodoInput);