const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.jsx'
  },

  output: {
    path: path.join(__dirname, 'dist', 'assets'),
    publicPath: '/',
    filename: 'winemap.js'
  },
  // devtool: 'source-map',
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['eslint-loader']
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      BASE_URL: null,
      MAPBOX_ACCESS_TOKEN: null,
    }),
    new CopyPlugin([
      { from: 'data', to: 'data'},
    ])
  ],
  devServer: {
    port: process.env.PORT || 8080,
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    open: true,
    publicPath: '/assets/',
  }
};
