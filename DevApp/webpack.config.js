var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');
module.exports = {
    // context: __dirname + "/app/src/entry",
    entry: {
        index: './app/src/entry/index.js'
    }, //演示单入口文件
    output: {
        path: path.join(__dirname, '/app/dist'), //打包输出的路径
        filename: '[name].entry.js', //打包后的名字
    },
     module:{
        loaders:[
            {
                test:/\.js$/,
                loader:'babel',
                query:{
                    presets:['es2015']
                }
            }
        ]
    },
    watch:true,
    resolve: {
        modulesDirectories: ['app/src'],
        alias: {
            'jquery': 'lib/jquery.min',
        },
        extensions:["", ".webpack.js", ".web.js", ".js"]
    }
};
