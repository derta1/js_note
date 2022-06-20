const path = require('path')
//01 路径解析操作
/**
 * 返回不同的信息
 */
// const obj = path.parse('/a/b/c/index.html') 
// // {
// //   root: '/',
// //   dir: '/a/b/c',
// //   base: 'index.html',
// //   ext: '.html',
// //   name: 'index'
// // }
// console.log(obj)
// const obj1 = path.parse('/a/b/c') 
// console.log(obj1)

//02 序列化路径
// const pathObj = {
//   root: '/',
//   dir: '/a/b/c',     
//   base: 'index.html',
//   ext: '.html',      
//   name: 'index'      
// }

// console.log(path.format(pathObj))

//03 是否为绝对路径
// console.log(path.isAbsolute('foo'))
// console.log(path.isAbsolute('/foo'))
// console.log(path.isAbsolute('///foo'))
// console.log(path.isAbsolute('.'))
// console.log(path.isAbsolute('./'))
// console.log(path.isAbsolute('../'))

//04 路径拼接
// console.log(path.join('a/b', 'c', 'index.html'))
// console.log(path.join('/a/b', 'c', 'index.html'))
// console.log(path.join('/a/b', 'c', '../', 'index.html'))
// console.log(path.join('/a/b', 'c', './', 'index.html'))
// console.log(path.join('/a/b', 'c', './', '', 'index.html'))
// console.log(path.join('')) // .

//05 规范化
// console.log(path.normalize('a///b/c../f'))
// console.log(path.normalize('')) // .

//06 绝对路径
/**
 * resolve([from], to)
 * from: /a 
 * to:  b
 */
// console.log(path.resolve()) //cwd 工作目录
// console.log(path.resolve('a', 'b'))