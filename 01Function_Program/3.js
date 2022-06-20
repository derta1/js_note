function forEach(array, handler) {
  for(const [val, index] of array.entries()) {
    handler(val, index, array);
  }
}


function once(handler) {
  let isDone = false;
  return (...args) => {
    if(!isDone) {
      isDone = true;
      return handler(args)
    }
  }
}

let logOnce = once((num) => {
  console.log(`num is ${num}`);
});
logOnce(5);
logOnce(5);
logOnce(5);