var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    'index': './src/js/index.js'
  },
  output: {
    path: './static/',
    filename: '[name].[hash:8].js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    preLoaders: [
      {test: /\.jsx?$/, loader: 'eslint-loader', exclude: /node_modules/}
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'react-hot!babel',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass?sourceMap'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'url?limit=1000&name=images/[name].[hash:8].[ext]'
      },
      {
        test: /\.(woff|eot|ttf)$/i,
        loader: 'url?limit=10000&name=fonts/[name].[hash:8].[ext]'
      }
    ]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, './src/sass'), path.resolve(__dirname, './node_modules')]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};