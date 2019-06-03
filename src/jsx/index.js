import React, {Component} from 'react';


class JsxTest extends Component{

  render() {
    // jsx被转成React.createElement的形式，children就无限的往后写
    // const sameWay = React.createElement("h1", {className: "title"}, "hello", React.createElement("span", null, "world"));
    const element = <h1 className="title">hello<span>world</span></h1>;
    console.log(element);
    /**
     React元素 就是一个普通的JS对象 虚拟DOM
     {
      "type": "h1",
      "props": {
        "className": "title",
        "children": ["hello", {
          "type": "span",
          "props": {
            "children": "world"
          },
        }],
      },
     }*/
    return element;
  }
}


export default JsxTest;

// 特殊的属性有改名
// class => className，for  => htmlFor，dangerouslySetInnerHTML

