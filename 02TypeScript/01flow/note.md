能否允许随意的隐式类型转换--->强弱类型 安全
变量的类型能否变化--->动态、静态类型 检查

### 类型系统
- 没有类型系统
- 没有编译过程

### 弱类型的问题
- 运行阶段才能发现异常
- 函数参数不做类型检查
- 对象属性名会转换成字符串

### 强类型优势
- 错误更早暴露
- 代码更加智能，有代码提示
- 重构更加牢靠
- 减少不必要的类型判断

### Flow
> 类型检查器，通过类型注解检查代码

#### 使用
- 安装 `npm i flow-bin`
- `@ flow`
- 关闭`vscode`的代码检查
- `yarn flow`
- `yarn flow init`
- 移除类型注解
  - `yarn add flow-remove-types --dev`
  - `yarn flow-remove-types . -d dist`
  - `yarn add @babel/core @babel/cli @babel/preset-flow --dev`
  - `.babellrc`
  - `yarn babel src -d dist`
- 插件 Flow Language Support
- 支持类型推断