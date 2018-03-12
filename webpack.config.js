
const path = require('path');
// const webpack = require('webpack');

// const nodeEnv = process.env.NODE_ENV || 'production';

// console.log(nodeEnv);

module.exports = {
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  // plugins: [
  //   // env plugin
  //   new webpack.EnvironmentPlugin([nodeEnv]),
  // ],
};
