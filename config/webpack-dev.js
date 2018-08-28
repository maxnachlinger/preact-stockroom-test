const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const {
  srcPath,
  outputPath,
  publicPath,
  devJsBundleName,
  devServerHost,
  devServerPort,
} = require('./client');

module.exports = {
  context: srcPath,
  entry: {
    app: `${srcPath}/index.jsx`
  },
  mode: 'development',
  output: {
    path: outputPath,
    publicPath,
    filename: devJsBundleName,
  },
  devtool: 'inline-source-map',
  devServer: {
    port: devServerPort,
    host: devServerHost,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: srcPath,
        loader: 'babel-loader',
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new HtmlWebpackPlugin(),
  ]
};
