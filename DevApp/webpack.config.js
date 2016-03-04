var path = require('path');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
module.exports = {
    // context: __dirname + "/app/src/entry",
    entry: {
        index: './app/src/entry/index.js',
        refresh: './app/src/entry/refresh.js',
        share:'./app/src/entry/share.js',
        detail:'./app/src/entry/detail.js'
    }, //演示单入口文件
    output: {
        path: path.join(__dirname, '/app/dist'), //打包输出的路径
        filename: '[name].entry.js', //打包后的名字
    },
    module: {
        loaders: [
            { test: /zepto(\.min)?\.js$/, loader: "exports?Zepto; delete window.$; delete window.Zepto;" }, 
            {
                test: /\.js$/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test:/\.css$/,
                loader:'style!css'
            }
        ]
    },
    plugins: [
        new CommonsChunkPlugin({ //进行提取公因式选项;
            name: "zepto",
            minChunks: 2,
            chunks: ["index", "refresh"] //chunks用来指定，该公因式存在的地方. 也就是上面定义的入口.js
        })
    ],
    watch: true,
    resolve: {
        modulesDirectories: ['app/src'],
        alias: {
            'jquery': 'lib/jquery.min',
            'zepto': 'lib/zepto.min'
        },
        extensions: ["", ".webpack.js", ".web.js", ".js"]
    }
};
