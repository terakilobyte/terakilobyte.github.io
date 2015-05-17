var webpack = require('webpack');

module.exports = {
  devtool: 'eval',

  entry: {
    app: ['webpack/hot/dev-server', './src/App.js']
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
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
   ]
  },

  resolveLoader: { fallback: __dirname + "/node_modules"}
};

