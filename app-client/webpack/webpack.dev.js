const merge = require("webpack-merge");
const webpack = require("webpack");
const baseConfig = require("./webpack.config");
const path = require("path");

module.exports = merge(baseConfig, {
  devtool: "inline-source-map",
  mode: "development",
  devServer: {
    hot: true,
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "*",
    },
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: "sass-loader",
            options: {
              prependData: `@import "${path.resolve(
                __dirname,
                "../src/scss/_global.scss"
              )}";`,
            },
          },
        ],
      },
    ],
  },
});
