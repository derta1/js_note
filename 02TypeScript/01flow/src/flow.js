//@flow

function sum(a: number, b: number) {
  return a + b;
}
sum(100, 1);
// sum('100', '100');

function foo():void {
  console.log('undefined');
}

const obj:{[string]: number} = {
  // foo: '111'
}