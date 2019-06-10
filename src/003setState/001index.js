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
    // 对象也是存起来，对象是立即遍历存起来的数组，合并对象进this.state
    this.setState({number:this.state.number+3});
    // console.log('state=',this.state);
    this.setState({number:this.state.number+2});
    // console.log('state=',this.state);

    // 函数也是存起来，第一个函数返回的值，是个partcialState部分的state，
    // 应该也是立即合入this.state
    // 只不过{ number: state.number+1 }是这样的，state是闭包保存的。
    // 所以最后一个行又加一个this.setState({number:this.state.number+1})后，值又被覆盖成2了
    // { number: this.state.number+1 }因为this.state是上一次被覆盖后的值
    this.setState((state)=> {
      console.log(state);
      return {number:state.number+1};
    },()=>{
      console.log('第二个回调函数state=',this.state)
    });
    this.setState((state)=>{
      console.log(state);
      return {number:state.number+1};
    },()=>{
      console.log('第二个回调函数state=',this.state)
    });
    this.setState((state)=>{
      console.log(state);
      return {number:state.number+1};
    },()=>{
      console.log('第二个回调函数state=',this.state)
    });

    // 在下面加一行this.setState({number:this.state.number+1});
    // render出的结果变成了2，合并state的时候，又给搞回去了。
    // 感觉好像函数方式使用，state是接连的，但是没有被何如this.state的
    // 直到空的回调函数执行完了才会合入this.state

    this.setState({number:this.state.number+1});
    // console.log('state=',this.state);
  };

  render() {
    return <>
      <p>{ this.state.number }</p>
      <button onClick={this.add}>+</button>
    </>
  }
}

export default StateTest;
