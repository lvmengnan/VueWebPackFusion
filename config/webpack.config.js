const { env } = require('./webpack.utils');
const commonConfig = require('./webpack.config.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const config = Object.assign(new Object(), commonConfig);


module.exports = () => {
  if (env === 'production') {
    config.module.rules[2].use[0] = MiniCssExtractPlugin.loader; // css进行提取
    
    config.plugins.push(...[
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/chunks:[name].[contenthash:8].css'
      }), // css进行提取
    ])

    config.optimization = {
      minimizer: [
        '...',
        new CssMinimizerPlugin(), // 压缩css
      ]
    }
  } else {
    config.devtool = 'eval-source-map'; // 添加source-map, 便于调试
  }

  return config;
}