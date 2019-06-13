import React, { PureComponent } from 'react';

export default class App extends PureComponent {
  constructor(props){
    super(props);
    this.state = {title:'计数器',number:0};
    this.inputRef = React.createRef();
  }

  add = ()=>{
    this.setState({
      number:this.state.number+parseInt(this.inputRef.current.value)
    });
  };

  render() {
    console.log('App render');
    return (
      <div>
        <Title title={this.state.title}/>
        {/*<Title1 title={this.state.title}/>*/}
        <Counter number={this.state.number}/>
        <input ref={this.inputRef}/>
        <button onClick={this.add}>+</button>
      </div>
    )
  }
}

class Counter extends PureComponent{
  render(){
    console.log('Counter render');
    return <div>{this.props.number}</div>
  }
}

/*
 * 函数式组件不管props改没有，都render了
 */
function Title(props){
  console.log('Title render ');
  return <div>{props.title}</div>
}
/*
 * 继承PureComponent方式，我们发现它是不会render的，因为title没变过
 */
class Title1 extends PureComponent{
  render(){
    console.log('Title render');
    return <div>{this.props.title}</div>
  }
}


//<FuncComponent {...this.props}/> 和 FuncComponent(this.props);等价

/*function memo(FuncComponent){
  return class  extends PureComponent{
    render(){
      return <FuncComponent {...this.props}/>
    }
  }
}

function memo2(FuncComponent){
  return class  extends PureComponent{
    render(){
      return FuncComponent(this.props);
    }
  }
}

Title = memo(Title);*/
