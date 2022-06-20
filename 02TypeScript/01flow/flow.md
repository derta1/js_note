### 类型
- string
- number
- boolean
- null
- undefined
- symbol
- bigInt
- function

### 数组
`const arr:Array<number> = [1, 2, 3]`
`const arr1:number[] = [1, 2, 3]`
`const arr2:[string, number] = ['1', 2]`
### 对象
`const obj1:{foo:string, bar:number, opt?:string }`
`const obj2:{[string]:number}`
### 函数
src/func.js
### 特殊
`const a:'foo' = 'foo'`
`const code: 200 | 400 | 300 = 300` 联合类型
`const b: string | number = 3`
`type stringOrNumber = string | number`
`let gender: ?number` 可以是number null undefined 
### mixed
所有类型的联合类型
### any
mixed是强类型 但是any是弱类型的，不安全
