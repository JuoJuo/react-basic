import React, { useState, useCallback, useMemo } from "react";

function Child({onButtonClick,data}){
  console.log('Child render');
  return (
    <button onClick={onButtonClick} >{data.number}</button>
  )
}

// React.memo 的作用就是如果props对象的引用没变，就不执行重新渲染
let MemoChild = React.memo(Child);

// 可是由于函数式的组件每次渲染，该函数都得重新执行，给MemoChild传的属性的对象，每次都是一个新的。就导致每次都会渲染。
// 那怎么解决这个问题呢，就是使用useMemo(防止创建新对象) 跟 useCallback（反之创建新函数）,
export function ABC(){
  const [number,setNumber] = useState(0);
  const [name,setName] = useState('jack');

  // 第一次执行就存了()=>setNumber(number+1)，[number]，第二次渲染会遍历对比依赖项，是否相等。相等返回之前存的。不相等返回新的。
  const addClick = useCallback(()=>setNumber(number+1),[number]);

  // 同理，same with useCallback
  const  data = useMemo(()=>({number}),[number]);
  return (
    <div>
      <p>自己的name：{ name }</p>
      <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
      <MemoChild onButtonClick={addClick} data={data}/>
    </div>
  )
}
