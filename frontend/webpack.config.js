const path = require('path');

module.exports = {
  // mode: "development | production",
  // Chosen mode tells webpack to use its built-in optimizations accordingly.
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "static/frontend")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};