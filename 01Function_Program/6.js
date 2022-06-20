function curry(func) {
  return function help(...args) {
    if (args.length < func.length) {
      return function () {
        return help(...[...args, ...arguments]);
      }
    }
    return func(...args);
  }
}
function sum(a, b) {
  return a + b;
}
const addOne = curry(sum)(1);
console.log(addOne(2))
console.log(addOne(3))