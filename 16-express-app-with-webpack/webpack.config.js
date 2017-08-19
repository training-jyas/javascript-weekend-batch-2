const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: [
        path.join(__dirname, "webapp", "js", "main.js"),
        path.join(__dirname, "webapp", "index.html"),
        path.join(__dirname, "webapp", "css", "main.css")
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['es2015']
                }
            }
        }, {
            test: /\.html$/,
            use: {
                loader: 'raw-loader'
            }
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader: "css-loader",
                    options: {
                        sourceMap: true
                    }
                }, {
                    loader: "sass-loader",
                    options: {
                        sourceMap: true
                    }
                }]
            })
        }]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'webapp/index.html',
            chunksSortMode: 'dependency',
            inject: 'head'
        }),
        new ScriptExtHtmlWebpackPlugin({
            defaultAttribute: 'defer'
        }),
        new CopyWebpackPlugin([{
            from: 'webapp/asset'
        },{
            from: 'webapp/data'
        }]),
        new ExtractTextPlugin("main.css")
    ]
};