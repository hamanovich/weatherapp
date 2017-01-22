

module.exports = {
    contentBase: './src',
    port: 8008,
    inline: true,
    historyApiFallback: true,
    stats: 'errors-only',
    watchOptions: {
        aggregateTimeout: 300,
        poll: 500
    }
};
