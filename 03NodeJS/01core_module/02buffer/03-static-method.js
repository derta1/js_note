//01 concat
// let buf1 = Buffer.from('John ')
// let buf2 = Buffer.from('Wang')
// let b = Buffer.concat([buf1, buf2])
// console.log(b.toString()); 

//02 isBuffer
console.log(Buffer.isBuffer(Buffer.alloc(3)))
console.log(Buffer.isBuffer('111'))


