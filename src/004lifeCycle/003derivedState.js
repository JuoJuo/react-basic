import React, { Component } from 'react'

/*
*  17.0废掉，因为造成新的react异步渲染特性有问题
*  componentWillMount
   componentWillReceiveProps------static getDerivedStateFromProps
   componentWillUpdate--------------------getSnapshotBeforeUpdate
*
* */
export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {number:0};
  }

  add = ()=>{
    this.setState({number:this.state.number+1});
  };

  render() {
    return (
      <div>
        <p>{this.state.number}</p>
        <button onClick={this.add}>+</button>
        <SubCounter number={this.state.number}/>
      </div>
    )
  }
}

class SubCounter extends Component {
  constructor(props){
    super(props);
    this.state = {number:0};
  }

  //getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method
  //根据新的属性对象派生状态对象 新的属性对象 和旧的状态对象
  static getDerivedStateFromProps(nextProps,prevState){
    console.log('getDerivedStateFromProps', '可能有时候我们不喜欢外部传进来的props，想把它映射为state，就这在这里做');
    if(nextProps.number%2===0){
      return {number:prevState.number+nextProps.number*2};
    }else{
      return {number:prevState.number+nextProps.number*3};
    }
  }

  render() {
    return (
      <div>
        {this.state.number} {this.state.date}
      </div>
    )
  }
}
