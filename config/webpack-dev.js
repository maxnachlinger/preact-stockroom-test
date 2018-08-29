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
    app: `${srcPath}/index.jsx`,
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
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js?x)$/,
        include: srcPath,
        loader: 'babel-loader',
      },
      {
        test: /\.worker\.js$/,
        use: { loader: 'worker-loader' },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    new HtmlWebpackPlugin({
      title: 'Preact / Unistore Test',
    }),
  ],
};
