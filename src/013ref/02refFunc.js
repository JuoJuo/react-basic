import React from 'react';

//非受控组件  2. ref=函数
export default class Sum2 extends React.Component{
  add = ()=>{
    let numA = this.numA.value;
    let numB = this.numB.value;
    let result = parseFloat(numA)+parseFloat(numB);
    this.result.value = result;
  };
  render(){
    return (
      <>
        <input ref={target=>this.numA = target}/>
         +
        <input ref={target=>this.numB = target}/>

        <button onClick={this.add}>=</button>

        <input ref={target=>this.result = target}/>
      </>
    )
  }
}
