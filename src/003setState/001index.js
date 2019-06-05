import React from 'react';

/**
 * 解决this指针的三种方法
 * 1. this.add.bind(this) 把add方法里面的this指针绑定为组件实例
 * 2. 使用匿名函数
 * 3. 类的属性
 */
class StateTest extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      number: 1,
    };
  }

  //强制更新，不管状态和属性修改没有，都会强制刷新界面
  //直接修改state, this.state.num=123
  //然后直接this.forceUpdate();
  add = () => {
    this.setState({number:this.state.number+1});
    console.log('state=',this.state);
    this.setState({number:this.state.number+1});
    console.log('state=',this.state);

    this.setState((state)=>({number:state.number+1}),()=>{
      console.log('state=',this.state)
    });

    this.setState((state)=>({number:state.number+1}),()=>{
      console.log('state=',this.state)
    });

    this.setState((state)=>({number:state.number+1}),()=>{
      console.log('state=',this.state)
    });
  };


  render() {
    return <>
      <p>{ this.state.number }</p>
      <button onClick={this.add}>+</button>
    </>
  }
}

export default StateTest;
