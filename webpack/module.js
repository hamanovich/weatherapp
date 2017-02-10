const path = require('path');

module.exports = {
    rules: [
        {
            test: /\.ts$/,
            use: ['awesome-typescript-loader', 'angular2-template-loader', 'angular2-router-loader']
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
};
