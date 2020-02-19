const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { HotModuleReplacementPlugin } = require("webpack");
const merge = require("webpack-merge");

const baseConfig = require("./webpack.config.base");

module.exports = merge(baseConfig, {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
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
    new HtmlWebPackPlugin({
      template: "./template.html"
    }),
    new HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: "./public",
    hot: true,
    port: 3001,
    open: true,
    historyApiFallback: true
  },
  devtool: "inline-source-map"
});
