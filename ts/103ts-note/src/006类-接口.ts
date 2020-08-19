// 1.表示对象的形状
interface Flying {
  naming: string;
  // age可有可无
  age?: string;
  fly(): void;
  //只要属性的key是string，值是任意都行（propName名称随意取）
  [propName: string]: any;
}

const obj: Flying = {
  naming: "lrj",
  fly() {},
  a: 123,
  b: 123
};

// 2.表示行为的抽象
interface Flying2 {
  naming: string;
  fly(): void;
}

class A implements Flying2 {
  naming = "lrj";
  fly() {}
}

// 3.限定函数参数跟返回值
interface discount {
  (price: number): number;
}
let cost: discount = function(price: number): number {
  return price * 0.8;
};

// 4.只要属性的key是number，值是string都行
interface UserInterface {
  [xxx: number]: string;
}
let arr: UserInterface = ["范德萨", "范德萨发"];
let obj2: UserInterface = { 1: "xxxxxx" };


//  5.约束类的构造函数

interface withNmaeParam{
  // 要求类的构造函数必须有一个参数name是string的，返回A的实例
  new(name: string):A;
}
 function getInstance(clazz:withNmaeParam, name:string){
   return new clazz(name);
 }

// 重名的接口会合并
// 接口可以继承多个接口，类也可以继承都个接口
