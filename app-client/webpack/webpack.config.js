const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: [path.join(__dirname, "../src/index.jsx")],
  output: {
    path: path.resolve(__dirname, "../../app-server/static"),
    filename: " bundle.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, "../src/"),
        loaders: ["babel-loader"],
      },
      {
        test: /\.html$/,
        loaders: ["html-loader"],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "img/",
        },
      },
      {
        test: /\.(otf|ttf)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "fonts/",
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/public/index.html",
      filename: "./index.html",
    }),
  ],
};
