const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: path.join(__dirname, 'app/index.html'),
    filename: 'index.html',
    inject: 'body'
});

const config = {
    devtool: "inline-source-map",

    entry: {
        'polyfills': path.join(__dirname, '/app/polyfills.ts'),
        'vendor': path.join(__dirname, 'app/vendor.ts'),
        'app': path.join(__dirname, 'app/main.ts')
    },

    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },

    resolve: {
        extensions: ['', '.ts', '.js']
    },

    module: {
        preLoaders: [
            {
                test: /\.ts$/,
                loader: 'tslint-loader'
            }
        ],

        loaders: [
            // TS
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            },

            // SCSS
            {
                test: /\.scss/,
                exclude: /node_modules/,
                loaders: ['raw-loader', 'sass-loader']
            },

            // HTML
            {
                test: /\.html$/,
                loader: 'html-loader'
            },

            // FILES
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file?name=assets/[name].[hash].[ext]'
            },
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor', 'polyfills']
        }),
        HTMLWebpackPluginConfig
    ]
};

module.exports = config;