## react 技术栈
- react react-router4 redux react-redux
## 初始 package.json
## webpack
```
    $ yarn add webpack webpack-dev-server -D
```
```
    $ yarn add babel-core babel-loader babel-preset-es2015 babel-preset-stage-0 babel-preset-react css-loader style-loader less less-loader html-webpack-plugin -D
```
## react 
```
    $ yarn add react redux react-redux react-router-dom react-dom
```
## fetch 
```
    $ yarn add es6-promise whatwg-fetch -D
```
## express
```
    $ yarn add express
```
## scripts
```
    "start":"webpack-dev-server --port 5000 --open --progress --colors",
    "build":"webpack -p"
```
## 目录结构
- app
    - components 组件 木偶组件
    - containers 页面组件，或者自己的subpage目录下
        - Home
            - subpage 智能组件
            - index.jsx 首页
        - routes
            - index.jsx 路由组件 完成不同路由与对应页面之间的映射生成组件
        - index.jsx 根据路由依据不同的路由组件实现不同路由的显示；
    - index.html 
    - index.js containers 下的index.jsx App组件（包含各种路由的总页面）；