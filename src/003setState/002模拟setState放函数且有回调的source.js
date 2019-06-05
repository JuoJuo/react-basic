let state = {number: 0, name: 'zhufeng'};
const callbacks = [];

function setState(arr) {
  callbacks.push(arr);
}

setState([(state) => ({number: state.number + 1}), () => console.log(state)]);
setState([(state) => ({number: state.number + 2}), () => console.log(state)]);
setState([(state) => ({number: state.number + 3}), () => console.log(state)]);

let v;
let fns = [];
while ((v = callbacks.shift())) {
  const [cb, fn] = v;
  const partialState = cb(state);
  Object.assign(state, partialState);
  // for (let key in partialState) {
  //   state[key] = partialState[key]
  // }
  fns.push(fn);
}
fns.forEach(fn => fn());