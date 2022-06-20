class Person {
  readonly name:string
  private age:number
  constructor(name:string, age:number) {
    this.name = name;
    this.age = age;
  }
}
let tom = new Person('11', 11);
// tom.name = 'tome';