const merge = require('webpack-merge').merge
const path = require('path')
const baseConfig = require('./webpack.config.base')
const devConfig = {
  mode: 'development',
  output: {
    filename: '[name].[contenthash:4].js',
    publicPath: '/'
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true, // react router
    compress: true,
    disableHostCheck: true,
    hot: true,
    open: true
  },
  devtool: 'source-map'
}
module.exports = merge(baseConfig, devConfig)
