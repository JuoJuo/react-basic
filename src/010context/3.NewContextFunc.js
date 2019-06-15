import React, { Component } from 'react'
const ThemeContext = React.createContext();
//ThemeContext={Provider,Consumer}

/*
* 函数式组件的使用
* */
export default class Page extends Component {
    constructor() {
        super();
        this.state = { color: 'red' };
    }
    setColor = (color) => {
        this.setState({ color });
    };
    render() {
        let ctx = {
            color:this.state.color,
            setColor:this.setColor
        };
        return (
          <ThemeContext.Provider value={ctx}>
              <div style={{ border: '5px solid red', padding: '5px' }}>
                  Page
                  <Header>
                      <Title></Title>
                  </Header>
                  <Main>
                      <Content></Content>
                  </Main>
              </div>
          </ThemeContext.Provider>
        )
    }
}

class Header extends Component {
    render() {
        console.log(this.context);
        return <div style={{ border: '5px solid green', padding: '5px' }}>
            <Title></Title>
        </div>
    }
}

function Title (props){
    return (
      <ThemeContext.Consumer>
          {
              value=>(
                <div style={{ border: '5px solid orange', padding: '5px', color: value.color }}>
                    Title
                </div>
              )
          }
      </ThemeContext.Consumer>
    )
}

class Main extends Component {
    render() {
        return <div style={{ border: '5px solid blue', padding: '5px' }}>
            Main
            <Content></Content>
        </div>
    }
}

function Content(){
    return (
      <ThemeContext.Consumer>
          {
              value=>(
                <div style={{ border: '5px solid pink', padding: '5px', color: value.color }}>
                    Content
                    <button onClick={() => value.setColor('red')}>变红</button>
                    <button onClick={() => value.setColor('green')}>变绿</button>
                </div>
              )
          }
      </ThemeContext.Consumer>
    )
}


