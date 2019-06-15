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