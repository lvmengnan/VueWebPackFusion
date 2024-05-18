const { dirpath, env, getReg }  = require('./webpack.utils');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/dist/plugin');
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack');
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers');

module.exports = {
  mode: env,

  entry: dirpath('../src/index.js'),

  output: {
    path: dirpath('../dist'),
    filename: 'js/[name].[contenthash:8].js',
    clean: true,
    asyncChunks: true, // 默认值就是true
    chunkFilename: 'js/[name].[contenthash:8].js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: dirpath('../public/index.html'),
      title: 'VueWebpackFusion'
    }),
    new VueLoaderPlugin.default(),
    AutoImport.default({
      resolvers: [ElementPlusResolver()],
    }),
    Components.default({
      resolvers: [ElementPlusResolver()],
    }),
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
        use: ['vue-loader']
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
  },

  resolve: {
    alias: {
      '@': dirpath('../src'),
      '$vue': dirpath('../node_modules/vue/dist/vue.esm-bundler.js'),
    },

    extensions: ['.vue', '.js', '.json', '...']
  }
}