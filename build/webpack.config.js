const pkgName = require('../package.json').name
const merge = require('webpack-merge').merge
const path = require('path')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const baseConfig = require('./webpack.config.base')
const timeStamp = require('time-stamp')('MMDDHHmm')
const ZipPlugin = require('zip-webpack-plugin')
const ZipPluginer = new ZipPlugin({
  path: 'zip',
  filename: `${pkgName}_${timeStamp}.zip`
})
const prodConfig = {
  mode: 'production',
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: '/', // react router
    filename: 'js/[name].[contenthash:4].bundle.js',
    chunkFilename: 'js/chunks/[name].[chunkhash:4].js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    minimize: true,
    minimizer: [
      // '...',  自定义minimizer会关闭现有的压缩如terser-webpack-plugin，wp@5中使用`...`拓展
      new CssMinimizerPlugin(),
      new TerserPlugin({
        extractComments: false // 禁止默认剥离所有有效的注释
      })
    ]
  },
  plugins: [
    ZipPluginer
  ]
}
module.exports = merge(baseConfig, prodConfig)
