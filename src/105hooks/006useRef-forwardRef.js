import React, { useState, useRef } from "react";


export function Parent() {
  let [number, setNumber] = useState(0);
  return (
    <>
      <Child />
      <button onClick={() => setNumber({ number: number + 1 })}>+</button>
    </>
  )
}

let input;
function Child() {
  // 他每次都是原来的对象，原来的dom
  const inputRef = useRef();
  // React.createRef每次都是新的
  // const inputRef = React.createRef();
  console.log('input===inputRef', input === inputRef);
  input = inputRef;
  function getFocus() {
    inputRef.current.focus();
  }
  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={getFocus}>获得焦点</button>
    </>
  )
}

// 给组件添加ref，可以使用React.forwardRef(Child2);
// 具体到子组件的某个dom元素
function Child2(props, forwardRef) {
  // 由于我们给的current对象就是我们input的dom，父组件可以随便搞我，为了限制对方使用的我的功能，我们封装功能，返给current
  // useImperativeHandle(ref,()=>(
  //   {
  //     focus(){
  //       inputRef.current.focus();
  //     }
  //   }
  // ));
  return (
    <>
      <input type="text" ref={forwardRef} />
      <button onClick={props.getFocus}>获得焦点</button>
    </>
  )
}

const ForwardChild2 = React.forwardRef(Child2);

export function Parent2() {
  let [number, setNumber] = useState(0);

  const childEl = useRef();
  function getFocus() {
    childEl.current.focus();
  }
  return (
    <>
      <ForwardChild2 ref={childEl} getFocus={getFocus}/>
      <button onClick={() => setNumber({ number: number + 1 })}>+</button>
    </>
  )
}

