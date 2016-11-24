const path = require('path'),
  webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: path.join(__dirname, 'app/index.html'),
    filename: 'index.html',
    inject: 'body'
  }),

  config = {
    devtool: "inline-sourcemap",

    entry: [
      './app/index.ts'
    ],

    output: {
      path: path.join(__dirname, 'dist'),
      filename: "index.js"
    },

    resolve: {
      extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },

    module: {
      loaders: [
        // ts
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: "ts-loader"
        },

        // CSS
        {
          test: /\.scss/,
          loader: 'style-loader!css-loader!sass-loader'
        }
      ]
    },

    plugins: [
      HTMLWebpackPluginConfig
      // new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
    ]
  };

module.exports = config;