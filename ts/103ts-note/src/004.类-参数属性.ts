class Animal {
  myname: string;

  constructor(myname: string) {
    this.myname = myname;
  }
}

const a2 = new Animal("lirenjie");

/**
 * 在constructor上的参数列表机上属性修饰符
 * 等价于上面的写法
 */
class Animal2 {
  constructor(public myname: string) {}
}

const a3 = new Animal2("lirenjie");
console.log(a3.myname);
