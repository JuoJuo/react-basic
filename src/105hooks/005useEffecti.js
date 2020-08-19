import React, { useEffect, useState, useReducer } from 'react';




function Counter() {
  const [number, setNumber] = useState(0);
  // useEffect可以完成componentDidMount componentDidUpdate的工作。
  // 第一次执行，会在Counter执行完了以后（保存该函数跟 第二个参数依赖项），接执行useEffect里的函数。
  // 当再次执行的时候（Counter执行完了以后），会对比之前存的依赖项，跟本次检查依赖项是否完全相等，改变就再次执行useEffect里第一次传的函数，否则就不执行
  // useEffect里的函数可以有返回值，返回值得是一个函数，该函数在Counter执行完了以后，useEffect里的本身的函数执行前，执行上次返回的函数。
  console.log('Counter exec begin');
  useEffect(() => {
    console.log('开启一个新的定时器')
    const $timer = setInterval(() => {
      setNumber(number => number + 1);
    }, 5000);
    return () => {
      console.log('销毁老的定时器');
      clearInterval($timer);
    }
  });

  console.log('Counter exec before return');
  return (
    <>
      <p>{number}</p>
    </>
  )
}
export function Effect() {
  let [visible, setVisible] = useState(true);
  return (
    <div>
      {visible && <Counter />}
      <button onClick={() => setVisible(false)}>stop</button>
    </div>
  )
}
