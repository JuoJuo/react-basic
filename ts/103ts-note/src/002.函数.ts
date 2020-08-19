// 1.表达式
type myfns = (x: string, y: string) => string;

const myfn: myfns = (abc, de) => {
  return abc + de;
};

// 2.可选参数age?:number,  默认参数name:string = 'GET'  剩余参数...left:number[]
// function print(name:string = 'GET', ...left:number[]):void {
// console.log(name,age, left);
// }

// 3.返回值void
function greeting(name: string): void {
  console.log("hello", name);
  //当我们声明一个变量类型是 void 的时候，它的非严格模式(strictNullChecks:false)下仅可以被赋值为 null 和 undefined
  //严格模式(strictNullChecks:true)下只能返回undefined
  //return null;
  //return undefined;
}

// 4.返回值never  ---不能正常执行完的函数就是never
function error(message: string): never {
  throw new Error(message);
}

// 由类型推论得到返回值为 never
function fail() {
  return error("Something failed");
}

function infiniteLoop(): never {
  while (true) {}
}

// 5.函数的重载 --- 多写几个就行了function attr(val: string): void;
let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x: string): number;
function pickCard(x: number): number;

// 只有两个重载，就是上面的两个，下面这个是函数定义（也就是说，只能接受string或者number，返回值是number）
// noImplicitAny写成false，表示隐式的any可以不写。否则就报错
function pickCard(x) {
  console.log(x);
  return 1;
}
pickCard("1");
pickCard(1);
