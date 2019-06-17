import React, { Component } from 'react'
const ThemeContext = React.createContext();
//ThemeContext={Provider,Consumer}

/*
* 类组件的使用
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
              <div style={{ border: '1px solid red', padding: '1px' }}>
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
        return <div style={{ border: '1px solid green', padding: '1px' }}>
            <Title></Title>
        </div>
    }
}

//类组件：使用的时候，在任何子组件里边，写一句 static contextType = ThemeContext;
//this.context就自动的把<ThemeContext.Provider value={ctx}>里的ctx赋值给它了
class Title extends Component {
    static contextType = ThemeContext;
    render() {
        console.log(this.context);
        return <div style={{ border: '1px solid orange', padding: '1px', color: this.context.color }}>
            Title
        </div>
    }
}

class Main extends Component {
    render() {
        return <div style={{ border: '1px solid blue', padding: '1px' }}>
            Main
            <Content></Content>
        </div>
    }
}

class Content extends Component {
    static contextType = ThemeContext;
    render() {
        return <div style={{ border: '1px solid pink', padding: '1px', color: this.context.color }}>
            Content
            <button onClick={() => this.context.setColor('red')}>变红</button>
            <button onClick={() => this.context.setColor('green')}>变绿</button>
        </div>
    }
}


