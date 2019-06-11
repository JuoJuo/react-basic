import React, { Component } from 'react'

/*
*  17.0废掉，因为造成新的react异步渲染特性有问题
*  componentWillMount
   componentWillReceiveProps------------getDerivedStateFromProps
   componentWillUpdate--------------------getSnapshotBeforeUpdate
* */
export default class GetSnapshotBeforeUpdate extends Component {
  constructor(props){
    super(props);
    this.wrapper = React.createRef();
    this.state = {messages:[]};
  }

  componentDidMount(){
    setInterval(()=>{
      this.setState({messages:["msg:"+this.state.messages.length,...this.state.messages]});
      //this.setState({messages:[...this.state.messages,this.state.messages.length]});
    },1000);
  }

  getSnapshotBeforeUpdate(){
    //返回更新内容的高度 300px   返回值传到componentDidUpdate的参数里的
    console.log('getSnapshotBeforeUpdate');
    return this.wrapper.current.scrollHeight;
  }

  //组件更新完毕
  componentDidUpdate(prevProps,prevState,prevScrollHeight){
    this.wrapper.current.scrollTop = this.wrapper.current.scrollTop+(this.wrapper.current.scrollHeight-prevScrollHeight);
  }

  render() {
    console.log('render');
    let style = {
      height:'100px',
      width:'200px',
      border:'1px solid red',
      overflow:'auto'
    };
    return (
      <ul style={style} ref={this.wrapper}>
        {
          this.state.messages.map((message,index)=><li key={index}>{message}</li>)
        }
      </ul>
    );
  }
}
