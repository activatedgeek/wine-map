const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/index.jsx'
  },

  output: {
    path: __dirname + '/dist/assets',
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
    })
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
};
