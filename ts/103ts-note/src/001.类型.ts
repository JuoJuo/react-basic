// 1.基本类型
let married: boolean = false;

let age: number = 10;

let firstname: string = "lrj";

let arr2: number[] = [4, 5, 6];

let arr3: Array<number> = [7, 8, 9];

let uname: [string, number] = ["jack", 5];

const enum Gender {
  GIRL,
  BOY
}

enum Week {
  MONDAY = "mon",
  TUESDAY = "xixi"
}

// 2.any使用
const htmlDom: any = {};

// uname本身是[string, number]
uname = {} as any;

// 3.调用方法获取到null，直接访问属性会报错，我们使用 !.  ===相当于  root ? root.name : root
let root: any = document.getElementById("root");
console.log(root!.name);

// 4.null 和 undefined 是其它类型的子类型，可以赋值给其它类型
// 得关掉strict配置  或者不关strict，把strictNullChecks关掉
let x: number;
x = 1;
x = undefined;
x = null;

let arr9: Array<number> = [7, 8, 9];
arr9 = undefined;
arr9 = null;
arr9 = [];

// "allowJs": true, /* Allow javascript files to be compiled. */
// "checkJs": true, /* Report errors in .js files. */

// 5.联合类型 --------- 未赋值时联合类型上只能访问两个类型共有的属性和方法
let name22: string | number;
console.log(name22.toString());
name22 = 3;
name22.toFixed(2);
name22 = "lrj";
name22.length;

// 6.未赋值时，很尴尬   我就想调用toFixed咋整？------断言
let name33: string | number;
console.log((name33 as string).length);
console.log((name33 as number).toFixed);
