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
        chunkFilename: 'css/chunks.[name].[contenthash:8].css'
      }), // css进行提取
    ])

    config.optimization = {
      minimizer: [
        '...',
        new CssMinimizerPlugin(), // 压缩css
      ],
      splitChunks: {
        chunks: 'all',
        minSize: 20000,
        minRemainingSize: 0,
        minChunks: 1,
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        enforceSizeThreshold: 50000,
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            reuseExistingChunk: true,
            // name: 'vendors'
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      },
    }

    config.externals = {
      jQuery: 'jQuery',
    };

  } else {
    config.devtool = 'eval-source-map'; // 添加source-map, 便于调试
    config.output.publicPath = '/';
    config.externals = {
      jQuery: 'jQuery',
    };
  }

  return config;
}