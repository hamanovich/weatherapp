const path = require('path');

module.exports = {
    modules: [
        'node_modules',
        path.resolve(process.cwd(), 'src')
    ],
    extensions: ['.ts', '.js', '.css', '.scss', '.html']
};
