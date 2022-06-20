const fs = require('fs')
const path = require('path')
//01 open
// fs.open(path.resolve('index.md'), 'r', (err, fd) => {
//   console.log(fd);
// })
//02 close
fs.open(path.resolve('index.md'), 'r', (err, fd) => {
  console.log(fd);
  fs.close(fd, err => {
    console.log('close');
  })
})