let path = require('path');
let htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:'./app/index.jsx',
    output:{
        filename:'bundle.js',
        path:path.resolve('dist')
    },
    module:{
        rules:[
            {test:/\.jsx$/,use:'babel-loader',exclude:/node_modules/},
            {test:/\.less/,use:['style-loader','css-loader','less-loader']}
        ]
    },
    plugins:[
       new htmlWebpackPlugin({
           template:'./app/index.html'
       })
    ],
    devtool:'source-map',//错误时可以提示源码，不会光提示bundle,js错误
    devServer:{
        proxy:{
            '/api':'http://localhost:3000'
        }
        
    }    
}