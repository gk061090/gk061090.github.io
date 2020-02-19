const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { HotModuleReplacementPlugin } = require("webpack");
const merge = require("webpack-merge");

const baseConfig = require("./webpack.config.base");

module.exports = merge(baseConfig, {
  mode: "development",
  entry: "./src/client.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../dist/public"),
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../src/static/index.html")
    }),
    new HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "../dist/public"),
    hot: true,
    port: 3001,
    open: true,
    historyApiFallback: true
  },
  devtool: "inline-source-map"
});