"use strict";
class MyAnimal {
    eat(food) {
        console.log(`eat ${food}`);
    }
}
class Cat extends MyAnimal {
    run(distance) {
        console.log('run ' + distance);
    }
}
const rrr = new Cat();
rrr.eat('111');
rrr.run(100);
