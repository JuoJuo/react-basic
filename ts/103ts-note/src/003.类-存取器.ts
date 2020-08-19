class Person {
  myname: string;

  constructor(myname: string) {
    this.myname = myname;
  }

  get name() {
    return this.myname;
  }

  set name(value) {
    this.myname = value;
  }
}

const p = new Person("lirenjie");
p.name = "lrjxixi";
