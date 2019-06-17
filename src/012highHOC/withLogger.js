import React from 'react';

export default function(Comp){
  return class extends React.Component{
    componentWillMount(){
        this.start = Date.now();
    }
    componentDidMount(){
       console.log((Date.now() - this.start) +'ms')
    }
    render(){
        return <Comp {...this.props}/>
    }
  }
}