var webpack = require('webpack');

module.exports = {
  entry: {
    app: ['./src/App.js']
  },

  output: {
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

