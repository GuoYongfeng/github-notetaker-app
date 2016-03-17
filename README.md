# 基于React + Webpack + Babel的项目脚手架

> 这个脚手架工程模板用于快速启动基于React + Webpack为技术栈的前端项目

## 使用方法

### 下载和安装
```
$ git clone git@github.com:GuoYongfeng/webpack-dev-boilerplate.git
$ cd webpack-dev-boilerplate
$ npm install
```

### 开发调试
```
$ npm run dev
```

查看效果` http://127.0.0.1:8080`

### 产出资源
```
$ npm run build
```

## 技术栈

- [x] [Webpack](https://webpack.github.io)
- [x] [React](https://facebook.github.io/react/)
- [x] [ES6](http://es6.ruanyifeng.com/)
- [ ] [Redux](https://github.com/rackt/redux)
- [ ] [React-router](https://github.com/rackt/react-router-redux)
- [x] [Babel](https://babeljs.io/)
- [ ] [Autoprefixer](https://github.com/postcss/autoprefixer)
- [ ] [PostCSS](https://github.com/postcss/postcss)
- [ ] [Gulp](http://www.gulpjs.com.cn/docs/getting-started/)
- [x] [CSS modules](https://github.com/outpunk/postcss-modules)

## 功能特性

- 可以解析JSX语法
- 可以解析ES6语法新特性
- 支持LESS预处理器
- 编译完成自动打开浏览器
- 区分开发环境和生产环节，支持一行命令产出待部署资源
- 实现组件级热更新
- 实现代码的热替换，浏览器实时刷新查看效果
- 分离业务功能代码和公共依赖代码
- 单独分离CSS样式文件
- 支持编译HTML模板
- 支持文件MD5戳，解决文件缓存问题
- 支持图片、图标字体等资源的编译
- 支持浏览器源码调试
