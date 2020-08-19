// 泛型类
class MyArray<T> {
  private list: T[] = [];
  add(value: T) {
    this.list.push(value);
  }
  getMax(): T {
    let result = this.list[0];
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i] > result) {
        result = this.list[i];
      }
    }
    return result;
  }
}
let arr22 = new MyArray();
arr22.add(1);
arr22.add(2);
arr22.add(3);
let ret = arr22.getMax();
console.log(ret);


// 泛型接口
interface Calculate {
  <T>(a: T, b: T): T;
}
let add: Calculate = function<T>(a: T, b: T) {
  return a;
};
add<number>(1, 2);
