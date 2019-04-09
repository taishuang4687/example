const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    mode:'development',
    entry:{
       'index':'./src/index.js'
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                // use:['style-loader','css-loader']
                use:ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:'css-loader'
                })
            }]
    },
    plugins:[
        new HtmlPlugin({
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            template:'./src/index.html'
        }),
        new ExtractTextPlugin('css/index.css')
    ],
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        host:'localhost',
        port:8081,
        open:true
    }
};