const { dirpath, env, getReg }  = require('./webpack.utils');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/dist/plugin');

module.exports = {
  mode: env,

  entry: dirpath('../src/index.js'),

  output: {
    path: dirpath('../dist'),
    filename: 'js/[name].[contenthash:8].js',
    clean: true
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: dirpath('../public/index.html'),
      title: 'webpack_vue3'
    }),
    new VueLoaderPlugin.default()
  ],

  devServer: {
    hot: true,
    open: true,
    historyApiFallback: true,
    port: '8080'
  },
  
  module: {
    rules: [
      {
        test: getReg('vue'),
        loader: 'vue-loader'
      },
      {
        test: getReg('js'),
        use: [ 'babel-loader'],
      },
      {
        test: getReg('css'),
        use: ['vue-style-loader',  'css-loader']
      },
      {
        test: getReg('scss'),
        use: ['sass-loader']
      }
    ]
  }
}