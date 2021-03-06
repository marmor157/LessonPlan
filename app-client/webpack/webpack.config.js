const HtmlWebPackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    app: [path.join(__dirname, "../src/index.tsx")],
  },
  output: {
    path: path.resolve(__dirname, "../../app-server/static"),
    filename: " bundle.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "ts-loader",
        options: {
          transpileOnly: true,
        },
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
    extensions: [".ts", ".tsx", ".js"],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: "./src/public/index.html",
      filename: "./index.html",
    }),
  ],
};
