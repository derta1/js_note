const fs = require('fs')
const path = require('path')
const browsweSync = require('browser-sync')
const { marked } = require('marked')
const mdPath = path.resolve(__dirname, process.argv[2])

const help = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  {{content}}
</body>
</html>`
fs.watchFile(mdPath, {interval: 20}, () => {
  fs.readFile(mdPath, 'utf-8', (err, data) => {
    let htmlStr = marked(data)
    fs.writeFile('index.html', help.replace('{{content}}', htmlStr), () => {
      console.log('write success')
    })
  })
})
browsweSync.init({
  browser: '',
  server:__dirname,
  watch: true,
  index: 'index.html'
})