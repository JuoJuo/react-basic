import React, { Component } from 'react'

/**
 * 我们有个鼠标的功能，记录鼠标在屏幕上的坐标
 */
export default class MouseTracker extends Component {
    constructor() {
        super();
        this.state = { x: 0, y: 0 };
    }
    handleMouseMove = (event)=>{
        this.setState({
            x:event.clientX,
            y:event.clientY
        });
    };
    render() {
        return (
            //使用卑鄙手段，调用别人传就来的属性（render属性），只不过传进来的render是个函数，
            // 这个函数data=><Picture {...props} {...data}/>，执行时往Picture传属性x,y,返回Picture组件
            <div onMouseMove={this.handleMouseMove}>
                {this.props.render(this.state)}
            </div>
        )
    }
}

