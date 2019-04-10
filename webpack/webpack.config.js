const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const glob = require('glob');
const PurifyCSSPlugin = require('purifycss-webpack');
const webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
// const entry = require('./webpack_config/entry_webpack.js');
module.exports = {
    // entry :entry,
    mode:'development',
    entry:{
       'index':'./src/index.js'
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js',
        publicPath:'http://localhost:8081/'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                // use:['style-loader','css-loader']
                use:ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:[{
                        loader:'css-loader',
                        options:{importLoaders:1}
                    },'postcss-loader'
                ]
                })
            },
            {
                test:/\.(png|jpg|gif)$/,
                use:[{
                    loader:'url-loader',
                    options:{
                        limit:500,
                        outputPath:'images/'

                    }
                }]

            },
            {
                test:/\.(htm|html)$/i,
                use:['html-withimg-loader']
            },
            // {
            //     test:/\.scss$/,
            //     use:['style-loader','css-loader','scss-loader']
            // },
            {
                test:/\.scss$/,
                use:ExtractTextPlugin.extract({
                    use:["css-loader","sass-loader"],
                    fallback:"style-loader",
                })
            },
            {
                test:/\.js$/,
                use:[{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                }],
                exclude:/node_modules/
            }
        ]
    },
    plugins:[
        new HtmlPlugin({
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            template:'./src/index.html'
        }),
        new ExtractTextPlugin('css/index.css'),
        new PurifyCSSPlugin({
            paths:glob.sync(path.join(__dirname,'src/*.html'))
        }),
        new webpack.BannerPlugin('邰爽所有，翻版必究!'),
        new CopyWebpackPlugin([{
            from:__dirname + '/src/public',
            to:'./public'
        }])
    ],
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        host:'localhost',
        port:8081,
        open:true
    }
    
};