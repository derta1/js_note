- commonjs nodejs
- AMD
- CMD
- ESModule browser

### commonjs 
> 语言层面的规范
- 任何一个文件都是一个模块，具有独立作用域
- 使用require导入
- 使用模块ID实现模块的定位
- 同步加载，需要先执行完被导入的模块
- module属性
  - id
  - filename
  - loaded
  - parent 调用了当前模块的模块
  - children 当前模块调用的模块
  - exports 当前模块需要暴露的内容
  - paths 不同目录下node_modules位置

#### module.exports 和exports
- 指向同一块内存

#### require
读入并执行一个模块
- resolve 绝对路径
- extensions 后缀
- main 主模块对象