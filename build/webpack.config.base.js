const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const px2rem = require('postcss-px2rem')
module.exports = {
  entry: {
    index: path.resolve(__dirname, '../src/index.js')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(scss|css)/,
        use: [
          // 'style-loader',
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [px2rem({ remUnit: 100 })]
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1000,
          name: 'img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff|ttf|eot)$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../src/index.html'),
      inject: 'body'
      // minify: true // default when mode production
    })
  ],
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      srcDir: path.resolve(__dirname, '../src'),
      componentsDir: path.resolve(__dirname, '../src/components'),
      assetscDir: path.resolve(__dirname, '../src/assets'),
      reduxDir: path.resolve(__dirname, '../src/redux'),
      utilsDir: path.resolve(__dirname, '../src/utils')
    }
  }
}
