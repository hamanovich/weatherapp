

module.exports = {
    contentBase: './src',
    port: 8008,
    inline: true,
    historyApiFallback: true,
    stats: 'errors-only',
    watchOptions: {
        aggregateTimeout: 500,
        poll: 500
    }
};
