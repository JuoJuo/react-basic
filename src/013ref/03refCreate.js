import React from 'react';

//受控组件
export default class Sum3 extends React.Component{
  constructor(props){
    super(props);
    this.numA = React.createRef();// 返回的实际是一个对象，包含current属性{current:numAInput}
    this.numB = React.createRef();//{current:numBInput}
    this.result = React.createRef();//{current:resultInput}
  }

  add = ()=>{
    let numA = this.numA.current.value;
    let numB = this.numB.current.value;
    let result = parseFloat(numA) + parseFloat(numB);
    this.result.current.value = result;
  };

  render(){
    return (
      <>
        <input ref={this.numA}/>
         +
        <input ref={this.numB}/>

        <button onClick={this.add}>=</button>

        <input ref={this.result}/>
      </>
    )
  }
}

/*自己实现createRef*/
function createRef(){
  return {current:null}
}
