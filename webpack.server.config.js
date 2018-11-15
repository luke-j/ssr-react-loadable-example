const path = require('path')
const webpack = require('webpack')
const { ReactLoadablePlugin } = require('react-loadable/webpack')

module.exports = {
  entry: {
    server: './server/index.js'
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, 'build')
  }
}
