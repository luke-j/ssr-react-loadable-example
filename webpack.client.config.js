const path = require('path')
const webpack = require('webpack')
const { ReactLoadablePlugin } = require('react-loadable/webpack')

module.exports = {
  entry: {
    app: ['@babel/polyfill', './client/index.js']
  },
  plugins: [
    new ReactLoadablePlugin({
      filename: './build/loadable-manifest.json'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
    })
  ],
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
