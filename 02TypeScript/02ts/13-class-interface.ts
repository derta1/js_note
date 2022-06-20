interface Eat {
  eat(food:string): void
}

interface Run {
  run(distance:number): void
}

class Animal implements Eat, Run {
  eat(food: string): void {
      
  }
  run(distance: number): void {
      
  }
}
class Human implements Eat, Run {
  run(distance: number): void {
      
  }
  eat(food: string): void {
      
  }
}