import React, { useState } from "react";

export function Counter(props) {
  const [state, setState] = useState(0);

  return (
    <div>
      <p>{state}</p>
      <button onClick={() => setState(state + 1)}>+</button>
    </div>
  )
}

// 每次重新渲染都会执行，setTimeout持有的是上一次的引用。
// 所以先点击 1下alertNumber
// 然后点击很多下+， alert的是0，因为每次都是独立的闭包
export function Counter2(props){
  const [number,setNumber] = useState(0);

  function alertNumber(){
    setTimeout(()=>alert(number),3000);
  }
  return (
    <>
      <p>{number}</p>
      <button onClick={()=>setNumber(number+1)}>+</button>
      <button onClick={alertNumber}>alertNumber</button>
    </>
  )
}

// setNumber里还可以传函数,能拿到上一次的number值
export function Counter3(props){
  const [number,setNumber] = useState(0);

  function alertNumber(){
    setTimeout(()=>setNumber(lastNum => lastNum + 1),3000);
  }
  return (
    <>
      <p>{number}</p>
      <button onClick={()=>setNumber(lastNum => lastNum + 1)}>+</button>
      <button onClick={alertNumber}>alertNumber</button>
    </>
  )
}

// 惰性初始 state， 有些state可能是需要经过计算拿到，依赖外部的属性计算
export function Counter4(props){
  const [{name,number},setValue] = useState(()=>{
    return {name:'计数器',number: props.num * 3 };
  });
  return (
    <>
      <p>{name}:{number}</p>
      <button onClick={()=>setValue({number:number+1})}>+</button>
    </>
  )
}

// setCounter会根据引用来判断是否进行重新渲染，引用相同，不渲染，log不会执行
export function Counter5(props){
  const [counter,setCounter] = useState({name:'计数器',number:0});
  console.log('render Counter');
  return (
    <>
      <p>{counter.name}:{counter.number}</p>
      <button onClick={()=>setCounter({...counter,number:counter.number+1})}>+</button>
      <button onClick={()=>setCounter(counter)}>用相同，不渲染</button>
    </>
  )
}
