var path = require('path')
var webpack = require('webpack')

module.exports =
{
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel' ],
        exclude: /node_modules/,
        include: __dirname
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      {
        include: __dirname, 
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader?limit=200000'
      }
    ]
  }
}
