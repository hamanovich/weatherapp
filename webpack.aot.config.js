const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: path.join(process.cwd(), 'src/index.html'),
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: {
        main: './app/main.aot.ts',
        vendor: [
            '@angular/platform-browser',
            '@angular/platform-browser-dynamic',
            '@angular/core',
            '@angular/common',
            '@angular/http'
        ],
        polyfill: [
            'core-js/client/shim',
            'zone.js/dist/zone',
            'zone.js/dist/long-stack-trace-zone'
        ]
    },

    context: path.join(process.cwd(), 'src'),

    output: {
        path: path.join(process.cwd(), 'dist'),
        filename: '[name].js'
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                use: 'raw-loader'
            },
            {
                test: /\.css$/,
                include: path.resolve(process.cwd(), 'src', 'app'),
                use: ['to-string-loader', 'css-loader']
            }
        ]
    },

    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.ProgressPlugin(),
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            path.join(process.cwd(), 'src')
        ),
        new CopyWebpackPlugin([
            {from: 'index.html'}
        ]),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['polyfill', 'vendor']
        }),
        HTMLWebpackPluginConfig,
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(true)
        })
    ],

    resolve: {
        modules: [
            'node_modules',
            path.resolve(process.cwd(), 'src')
        ],
        extensions: ['.ts', '.js', '.css', '.scss', '.html']
    },

    devServer: {
        contentBase: './src',
        port: 8008,
        inline: true,
        historyApiFallback: true,
        stats: 'errors-only',
        watchOptions: {
            aggregateTimeout: 300,
            poll: 500
        }
    },

    stats: 'errors-only',
    devtool: 'source-map'
};
