//----------------------- | 表示或者 & 表示合并
interface Bird1 {
  lrj: string;
  fly(): void;
}
interface Person1 {
  lrj: string;
  talk(): void;
}
type BirdPerson = Bird1 & Person1;

const ppxia: BirdPerson = {
  lrj: "zhufeng",
  fly() {},
  talk() {}
};

//---------------typeof  一般我们是先定义类型再定义变量
type People2 = {
  name: string;
  age: number;
  gender: string;
};
let p1: People2 = {
  name: "zhufeng",
  age: 10,
  gender: "male"
};
//  但是！ 先定义变量，再定义类型这种业务场景--节约不少代码哦
let p2 = {
  name: "zhufeng",
  age: 10,
  gender: "male"
};
type People = typeof p2;
function getName(p: People): string {
  return p.name;
}
getName(p1);

// ---------------索引访问操作符-------可以通过[]获取一个类型的子类型
interface Person3 {
  name: string;
  age: number;
  job: {
    name: string;
  };
  interests: { name: string; level: number }[];
}
let FrontEndJob: Person3["job"] = {
  name: "前端工程师"
};
let interestLevel: Person3["interests"][0]["level"] = 2;

// ---------------索引类型查询操作符
interface Person4 {
  name: string;
  age: number;
  gender: "male" | "female";
}
//等价 type PersonKey = 'name'|'age'|'gender'; ---注意，是或者关系
type PersonKey = keyof Person4;

function getValueByKey(p: Person4, key: PersonKey) {
  return p[key];
}
getValueByKey({ name: "zhufeng", age: 10, gender: "male" }, "name");

// ----------------- 映射类型
interface Person6 {
  name: string;
  age: number;
  gender: "male" | "female";
}
//批量把一个接口中的属性都变成可选的
type PartPerson = { [Key in keyof Person6]?: Person6[Key] };

let p5: PartPerson = {};
//也可以使用泛型
type Part<T> = { [key in keyof T]?: T[key] };
let p6: Part<Person6> = {};


// ---------------取函数返回值的类型ReturnType 
function getUserInfo() {
  return { name: "zhufeng", age: 10 };
}

// 通过 ReturnType 将 getUserInfo 的返回值类型赋给了 UserInfo
type UserInfo = ReturnType<typeof getUserInfo>;

const userA: UserInfo = { name: "zhufeng", age: 10 };


// -----------------自带的工具

// 把A这个类型所有属性变成可选的，返回新的类型
type aPartial = Partial<A>;

// 把Person类型里所有的属性都变成必须输入的
let io:Required<Person>;

// 把Person类型里所有的属性都变成只读的
let oi:Readonly<Person>;

// 只取person里的name属性
type AnimalSub = Pick<Person, "name">;



// 排除交集
type E = Exclude<string|number,string>;
let e:E = 10;

// 取交集
type E1 = Extract<string|number,string>;
let e1:E2 = '1';

// 排除 null 和 undefined
type E2 = NonNullable<string|number|null|undefined>;
let e2:E2 = null;
