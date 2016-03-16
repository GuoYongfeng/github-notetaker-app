'use strict';

var path = require('path');
var webpack = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
// 产出html模板
var HtmlWebpackPlugin = require("html-webpack-plugin");
// 单独样式文件
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: [
      path.resolve(__dirname, 'app/index.js')
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "[name].[hash:8].js",
        publicPath: '/'
    },
    resolve: {
      extension: ['', '.jsx', '.js', '.json'],
      alias: {}
    },
    'display-error-details': true,
    module: {
      noParse: [],
      loaders: [
        {
          test: /\.js[x]?$/,
          loaders: ['react-hot', 'babel'],
          exclude: path.resolve(__dirname, 'node_modules')
        },
        {
          test: /\.css$/,
          include: path.resolve(__dirname, 'app'),
          loader: 'style-loader!css-loader'
        },
      ]
    },
    plugins: [
      new ExtractTextPlugin("[name].[hash:8].css", {
          allChunks: true,
          disable: false
      }),
      new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.[hash:8].js'),
      new uglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      new HtmlWebpackPlugin({
        title: 'your app title',
        template: './app/index.html',
      }),

    ]
};
