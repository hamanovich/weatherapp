const path = require('path');

module.exports = {
    entry: require('./webpack/entry.jit'),
    context: path.join(process.cwd(), 'src'),
    output: require('./webpack/output'),
    module: require('./webpack/module.test'),
    plugins: require('./webpack/plugins.test'),
    resolve: require('./webpack/resolve'),
    devServer: require('./webpack/dev-server'),
    stats: 'errors-only',
    devtool: 'inline-source-map',
    performance: {
        hints: false
    }
};