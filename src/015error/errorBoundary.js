import React, { Component,lazy, Suspense } from 'react'
import ReactDOM from 'react-dom';
import Loading from './components/Loading';
const AppTitle  = lazy(()=>import(/* webpackChunkName: "title" */'./components/Title'))

class App extends Component{
  state = {visible:false,isError: false}
  show = ()=>{
    this.setState({visible:true});
  }

  static getDerivedStateFromError(error) {
    return { isError: true };
  }

  componentDidCatch (err, info) {
    console.log(err, info)
  }
  render() {
    if (this.state.isError) {
      return (<div>error</div>)
    }
    return (
      <>
        {this.state.visible&&(
          <Suspense fallback={<Loading/>}>
            <AppTitle/>
          </Suspense>
        )}
        <button onClick={this.show}>加载</button>
      </>
    )
  }
}
ReactDOM.render(<App />, document.querySelector('#root'));
