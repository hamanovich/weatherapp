const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: path.join(__dirname, 'app/index.html'),
    filename: 'index.html',
    inject: 'body'
});

const config = {
    devtool: "source-map",

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
        preLoaders: [
            {
                test: /\.ts$/,
                loader: 'tslint-loader'
            }
        ],

        loaders: [
            // ts
            {
                test: /\.ts$/,
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