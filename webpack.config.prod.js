const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const safeParser = require("postcss-safe-parser");
const HtmlWebpackInlineSourcePlugin = require("html-webpack-inline-source-plugin");

module.exports = {
  mode: "production",
  entry: path.join(__dirname, "src/js/index.js"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].[chunkhash:8].js",
    publicPath: "/uploads/landing/302a75ca-e6d8-4e8a-8624-47f001dc83f1/"
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
            test: [/\inline.*.bmp$/, /\inline.*.gif$/, /\inline.*.jpe?g$/, /\inline.*.png$/, /\inline.*.svg$/, /\.woff2$/, /\.woff$/],
            loader: "url-loader",
            options: {
              limit: 9999999,
              name: "img/[name].[hash:8].[ext]"
            }
          },
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
            loader: "url-loader",
            options: {
              limit: 30000,
              name: "img/[name].[hash:8].[ext]"
            }
          },
          {
            loader: "file-loader",
            exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
            options: {
              name: "[name].[hash:8].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash:8].css"
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src/index.pug"),
      minify: true,
      inlineSource: ".(css)$"
    }),
    new HtmlWebpackInlineSourcePlugin()
  ]
};