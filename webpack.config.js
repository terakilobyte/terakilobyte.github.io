var webpack = require('webpack');

module.exports = {
  devtool: 'eval',

  entry: {
    app: ['./src/App.js']
  },

  output: {
    path: './',
    publicPath: '',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'jsx-loader?harmony'
      }
   ]
  }
};

