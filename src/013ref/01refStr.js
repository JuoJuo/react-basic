import React from 'react';

//非受控组件  1.ref=字符串
export default class Sum extends React.Component{
  add = ()=>{
    let numA = this.refs.numA.value;
    let numB = this.refs.numB.value;
    let result = parseFloat(numA)+parseFloat(numB);
    this.refs.result.value = result;
  };

  render(){
    return (
      <>
        <input ref="numA"/>
        +
        <input ref="numB"/>

        <button onClick={this.add}>=</button>

        <input ref="result"/>
      </>
    )
  }
}
