class Father {
  public name: string; //类里面 子类 其它任何地方外边都可以访问
  protected age: number; //类里面 子类 都可以访问,其它任何地方不能访问
  private money: number; //类里面可以访问， 子类和其它任何地方都不可以访问
  constructor(name: string, age: number, money: number) {
    //构造函数
    this.name = name;
    this.age = age;
    this.money = money;
  }
  getName(): string {
    return this.name;
  }
  setName(name: string): void {
    this.name = name;
  }
}
/**
 * protected 属性子类的内部可以用
 *
 */
class Child extends Father {
  constructor(name: string, age: number, money: number) {
    super(name, age, money);
  }
  desc() {
    console.log(`${this.name} ${this.age}`);
    // console.log(`${this.money}`);
  }
}

let child = new Child("zfpx", 10, 1000);
console.log(child.name);

// 外边protected private都不能用
// console.log(child.age);
// console.log(child.money);
