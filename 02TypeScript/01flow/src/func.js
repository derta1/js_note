//@ flow
function foo(callback: (string, number) => void) {
  callback('1', 2 );
}
foo((a:string, number):void => {
  console.log(a + b);
})