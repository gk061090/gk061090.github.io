const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const safeParser = require("postcss-safe-parser");
//const HtmlWebpackInlineSourcePlugin = require("html-webpack-inline-source-plugin");

module.exports = {
  mode: "production",
  entry: path.join(__dirname, "src/js/index.js"),
  output: {
    path: path.join(__dirname, "/"),
    filename: "dist/js/[name].[chunkhash:8].js",
    publicPath: "/"
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          parser: safeParser,
          discardComments: { removeAll: true }
        }
      })
    ]
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          },
          {
            test: /\.scss$/,
            use: [
              MiniCssExtractPlugin.loader,
              "css-loader",
              "postcss-loader",
              "sass-loader"
            ]
          },
          {
            test: /\.pug$/,
            use: ["pug-loader"]
          },
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
            loader: "url-loader",
            options: {
              limit: 100,
              name: "dist/img/[name].[hash:8].[ext]"
            }
          },
          {
            loader: "file-loader",
            exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
            options: {
              name: "dist/js/[name].[hash:8].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "dist/css/[name].[contenthash:8].css"
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src/index.pug"),
      minify: true
    }),
  ]
};