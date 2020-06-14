var HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require ('clean-webpack-plugin');
const path = require("path");

module.exports = {
    mode: "development",
    devtool: "none",
    entry: "./fancy-weather/src/scripts/index.js",
    output: {
        filename: "main.[contentHash].js",
        path: path.resolve(__dirname, "./dist")
      },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(svg|png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: 'images/[name].[ext]',
                },
              },
            ],
          },
          {
            test: /\.html$/i,
            loader: 'html-loader',
          },
          {
            test: /\.svg$/,
            loader: 'svg-inline-loader'
          }
        ],
    },
    plugins: [new HtmlWebpackPlugin({
        template: './fancy-weather/src/template.html',
      } ),
      new CleanWebpackPlugin()]
  }