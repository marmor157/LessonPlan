const merge = require("webpack-merge");
const webpack = require("webpack");
const baseConfig = require("./webpack.config");
const webpackHotMiddleware = require("webpack-hot-middleware");
const path = require("path");

module.exports = merge(baseConfig, {
  entry: {
    app: [
      path.join(__dirname, "../src/client/index.jsx"),
      "webpack-hot-middleware/client"
    ]
  },
  devtool: "inline-source-map",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "style-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          {
            loader: "sass-loader"
          }
        ]
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
});
