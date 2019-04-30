const path = require('path')
const merge = require('webpack-merge')

const baseConfig = require('./webpack.base')

module.exports = merge(baseConfig, {
  entry: {
    'image-effect': './example/app.js',
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: '[name].js',
  },
  devtool: 'eval-source-map',
})
