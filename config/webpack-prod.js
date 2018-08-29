const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const {
  srcPath,
  outputPath,
  publicPath,
  devJsBundleName,
} = require('./client');

module.exports = {
  context: srcPath,
  entry: {
    app: `${srcPath}/index.jsx`
  },
  mode: 'production',
  output: {
    path: outputPath,
    publicPath,
    filename: devJsBundleName,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js?x)$/,
        include: srcPath,
        loader: 'babel-loader',
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new HtmlWebpackPlugin({
      title: 'Preact / Unistore Test'
    }),
  ]
};
