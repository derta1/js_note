const fs = require('fs')
// read 将数据从磁盘文件写入到buffer
// let buf = Buffer.alloc(22)
// fs.open('data.txt', 'r', (err, rfd) => {
//   console.log('rfd', rfd)
//   //offset -> buffer的哪个位置开始写入
//   //写入的长度
//   //对应磁盘字节偏移
//   fs.read(rfd, buf, 0, 22, 0, (err, readBytes, data) => {
//     console.log('err', err)
//     console.log('readBytes', readBytes)
//     console.log('data', data.toString())
//   })
// })

//write 将buffer的数据写入到磁盘文件
let buf = Buffer.from('good')
fs.open('a.txt', 'w', (err, wfd) => {
  //offset
  //length
  //磁盘的字节偏移
  fs.write(wfd, buf, 0, 3, 0, (err, written, buf) => {
    console.log(written)
    console.log(buf.toString());
  })
})