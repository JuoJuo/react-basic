/**
 * 这个方法仅仅是提供一个把函数一次执行的功能，
 * 第一个函数执行后的返回值，当参数传给第二个函数执行。一次类推。
 * @param fns
 * @returns {*|(function(...[*]): *)}
 */
function compose(...fns) {
  //b(...args)如果不解构，参数就只有一个是个数组。
  return fns.reduce((a, b) => (...args) => a(b(...args)));
}

/*function add(a, b) {
  console.log(a + b);
  return a + b
}
function toUp(str) {
  console.log(str.toUpperCase());
  return str.toUpperCase();
}

function len(str) {
  console.log(str.length);
  return str.length;
}

console.log(compose(len, toUp, add)('aaa', 'bbb'));*/

export default compose;
