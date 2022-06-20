abstract class MyAnimal {
  eat(food:string) :void {
    console.log(`eat ${food}`)
  }
  abstract run(distance:number):void 
}

class Cat extends MyAnimal {
  run(distance: number): void {
      console.log('run ' + distance);
  }
}
const rrr = new Cat();
rrr.eat('111')
rrr.run(100)