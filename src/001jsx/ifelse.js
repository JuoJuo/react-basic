import React, { Component } from "react";

class Logic extends Component {

  //jsx是一个普通JS对象，那么它就可以被用在if while for 方法的参数 返回值
  fn(username) {
    if(username){
      return <h1>欢迎{username}</h1>
    }else{
      return <h1>欢迎陌生人</h1>
    }
  }

  fn2 = () => {
    console.log('这样写，fn2是在实例上，不在原型上')
  };

  render() {
    return this.fn('李大爺');
  }
}

export default Logic;
