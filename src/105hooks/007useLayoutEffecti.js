import React, { useLayoutEffect, useState, useEffect } from "react";


export function LayoutEffect() {
  const [color, setColor] = useState('red');
  // 阻塞渲染， 渲染前执行
  useLayoutEffect(() => {
    alert(color);
  });

  //不阻塞，异步的，渲染后执行
  useEffect(() => {
    console.log('color', color);
  });
  console.log('render')
  return (
    <>
      <div id="myDiv" style={{ background: color }}>颜色</div>
      <button onClick={() => setColor('red')}>红</button>
      <button onClick={() => setColor('yellow')}>黄</button>
      <button onClick={() => setColor('blue')}>蓝</button>
    </>
  );
}
