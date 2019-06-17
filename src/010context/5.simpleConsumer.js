import React, { Component } from 'react'

const ThemeContext = React.createContext();

// 接2.NewContext.js
function createContext() {
  class Provider extends Component {
    static value;
    constructor(props) {
      super(props);
      Provider.value = props.value;
      this.state = {value:props.value}
    }

    static getDerivedStateFromProps(props, state) {
      //更新静态属性，为了子组件能拿到新的值
      Provider.value = props.value;

      //它的返回值会替换state的同名属性哦
      return {value:props.props};
    }

    render() {
      return this.props.children;
    }
  }

  //这个没啥说的。。。直接观察用法就行了
  class Consumer extends Component{
    render(){
      return this.props.children(Provider.value);
    }
  }

  return {Provider, Consumer};
}

//子类在使用的时候能拿到ThemeContext，也就能拿到的Provider.value
class Content extends Component {
  static contextType = ThemeContext;
  render() {
    this.context = Content.contextType.Provider.value;
    return <div>
      {/*当子组件调用setColor的时候，实际上是调用的Page组件的setColor*/}
      {/*在setColor中，this.setState({ color })--->于是page组件的render被触发*/}
      {/*ctx的color属性也就被修改了，于是ThemeContext.Provider的getDerivedStateFromProps也就触发了*/}
      {/*Content.contextType.Provider.value就更新了，然后然后继续render里面的组件，于是所有的子组件都更新了*/}
      <button onClick={() => this.context.setColor('red')}>变红</button>
    </div>
  }
}