import React, {Component} from 'react';
import {bindActionCreators} from '../redux';
import ReduxContext from './context';

export default function (mapStateToProps, mapDispatchToProps) {
  return function (OriginComponent) {
    return class extends Component {
      //只要有这一一句话，这个组件实例上的context就是react-redux 里 Provider.js传的value
      static contextType = ReduxContext;

      constructor(props, context) {//其实构造函数的context也会被传那个东西进来
        super(props);//context={store:this.props.store}
        this.state = mapStateToProps(context.store.getState());
      }

      componentDidMount() {
        this.unsubcribe = this.context.store.subscribe(() => {
          this.setState(mapStateToProps(this.context.store.getState()));
        });
      }

      componentWillUnmount() {
        this.unsubcribe();
      }

      render() {
        let actions = {};

        if (typeof mapDispatchToProps == 'function') {
          actions = mapDispatchToProps(this.context.store.dispatch);
        } else {
          actions = bindActionCreators(mapDispatchToProps, this.context.store.dispatch);
        }

        return <OriginComponent {...this.state} {...actions}/>
      }
    }
  }
};
