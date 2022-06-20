let a:string = 'foo';
a = '111';
function foo():void {
  console.log('void');
  
}
// 报错 --> es6新增 修改target为es6/es2015 修改lib['es2015', 'dom']
let s:symbol = Symbol();
let arr:Array<number>;
const hello:number = 1;