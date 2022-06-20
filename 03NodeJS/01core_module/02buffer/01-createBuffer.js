//01 alloc
const bf1 = Buffer.alloc(10) //单位字节
console.log(bf1)
//02 allocUnsafe 可能空间的数据不为空，但是不会影响数据填充
const bf2 = Buffer.allocUnsafe(10)
console.log(bf2)
//03 from 接受数据
const bf3 = Buffer.from('1', 'utf8')
console.log(bf3) //<Buffer 31> 十六进制 utf8编码<default>
const bf4 = Buffer.from([1, 2, 3, '中']) //不能识别
console.log(bf4) // 数组三项 --> 

const bf5 = Buffer.from('中')
console.log(bf5) // 0xe4b8ad
console.log(bf5.toString())


const bf6 = Buffer.from([0xe4, 0xb8, 0xad]) //十六进制 八进制 二进制
console.log(bf6)
console.log(bf6.toString())


const bf7 = Buffer.alloc(3)
const bf8 = Buffer.from(bf7)

bf7[0] = 1
console.log(bf7)
console.log(bf8) //内存空间是否共享 no 是拷贝