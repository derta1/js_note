const path = require('path')
//1 获取路径的基础名称 最后部分
/**
 * 01 返回当前接受路径最后的一部分
 * 02 第二个如果匹配，去除 否则被忽略
 * 03 最后的路径分隔符会被忽略
 */
// console.log(__filename)
// console.log(path.basename(__filename))
// //去除后缀
// console.log(path.basename(__filename, '.js'))
// console.log(path.basename(__filename, '.css'))
// console.log(path.basename('/a/b/c'))
// console.log(path.basename('/a/b/c/'))

//2 获取路径目录名
/**
 * 01 获取路径最后一部分之前的内容
 * 02 最后的路径分隔符会被忽略 
 */
// console.log(path.dirname(__dirname));
// console.log(path.dirname('/a/b/c'));
// console.log(path.dirname('/a/b/c/'))

//3 获取路径拓展名
/**
 * 01 返回文件拓展名
 * 02 匹配最后一个.到结尾的内容
 */
// console.log(path.extname(__filename))
// console.log(path.extname('/a/b'))
// console.log(path.extname('a.c.b.e'))
// console.log(path.extname('a.c.b.'))