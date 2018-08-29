const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const { srcPath, outputPath, publicPath } = require('./client');

module.exports = {
  context: srcPath,
  entry: {
    app: `${srcPath}/index.jsx`,
  },
  mode: 'production',
  output: {
    path: outputPath,
    publicPath,
    filename: '[hash].[name].js',
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
    new CleanWebpackPlugin(outputPath, { allowExternal: true }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new HtmlWebpackPlugin({
      title: 'Preact / Unistore Test',
    }),
  ],
};
