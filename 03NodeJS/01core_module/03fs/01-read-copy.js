const fs = require('fs')
const path = require('path')
// 01 readFile
fs.readFile(path.resolve('data.txt'), 'utf-8', (err, data) => {
  if(err) return;
  console.log(data);
})
//02 writeFile
fs.writeFile(path.resolve('data.txt'), 'Hello JavaScript!', (err, data) => {
  if(err) return;
  fs.readFile(path.resolve('data.txt'), 'utf-8', (err, data) => {
    if(err) return;
    console.log(data);
  })
})
// 03 appendFile
fs.appendFile(path.resolve('data.txt'), 'Good!', (err) => {
  
})
//04 copyFile
fs.copyFile('data.txt', 'tar.txt', () => {
  console.log('good')
})
//05 watchFile
fs.watchFile('data.txt', {interval:20}, (cur, pre) => {
  console.log('cur', cur)
  console.log('pre', pre)
})
//06 unwatchFile