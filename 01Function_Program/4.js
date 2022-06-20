function forEach(array, handler) {
  for (const [index, val] of array.entries()) {
    handler(val, index, array);
  }
}
forEach([1, 2, 3], val => {
  console.log(val);
});

function map(array, handler) {
  const res = [];
  for (const [index, val] of array.entries()) {
    res.push(handler(val, index, array));
  }
  return res;
}
console.log(map([1, 2, 3], val => val * val));

function filter(array, handler) {
  const res = [];
  for (const [index, val] of array.entries()) {
    if (handler(val, index, array)) {
      res.push(val);
    }
  }
  return res;
}
console.log(filter([1, 2, 1, 3], val => val % 2 === 0));

function every(array, handler) {
  for (const [index, val] of array.entries()) {
    if (handler(val, index, array)) {
      return false;
    }
  }
  return true;
}

function some(array, handler) {
  for (const [index, val] of array.entries()) {
    if (handler(val, index, array)) {
      return true;
    }
  }
  return false;
}
