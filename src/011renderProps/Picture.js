import React,{Component} from 'react';
import MouseTracker from './MouseTracker';


function withMouseTracker(Comp){
   return props=><MouseTracker render={data=><Comp {...props} {...data}/>}/>;
}

/**
 * 图片需要鼠标坐标的那个功能
 */
class Picture extends Component {
    render() {
        return (
            <>
                <img src="http://localhost:3000/bg.jpg"/>
                <p>当前鼠标的位置是 x={this.props.x} y={this.props.y}</p>
            </>
        )
    }
}
// export default <MouseTracker render={data=><Picture {...props} {...data}/>}/>;
export default withMouseTracker(Picture);

// 几个月后看，其实就相当于vue里的slot，MouseTracker组件里需要插入别的组件。
// 我们就让MouseTracker在需要的地方，自己调用别人传过来的函数，返回需要插入的组件，并且传入相应的props执行

// React.lazy() + suspense
