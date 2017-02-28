const path = require('path');

module.exports = {
    rules: [{
            enforce: 'pre',
            test: /\.js$/,
            loader: 'source-map-loader',
            exclude: [
                path.resolve(process.cwd(), 'node_modules/rxjs'),
                path.resolve(process.cwd(), 'node_modules/@angular')
            ]
        },
        {
            test: /\.ts$/,
            use: [{
                    loader: 'awesome-typescript-loader',
                    query: {
                        sourceMap: false,
                        inlineSourceMap: true,
                        compilerOptions: {
                            removeComments: true
                        }
                    },
                },
                'angular2-template-loader'
            ],
            exclude: [/\.e2e\.ts$/]
        },
        {
            test: /\.json$/,
            loader: 'json-loader'
        },
        {
            test: /\.html$/,
            use: 'raw-loader'
        },
        {
            test: /\.css$/,
            include: path.resolve(process.cwd(), 'src', 'app'),
            use: ['to-string-loader', 'css-loader']
        },

        {
            enforce: 'post',
            test: /\.(js|ts)$/,
            loader: 'istanbul-instrumenter-loader',
            query: {
                esModules: true
            },
            include: path.resolve(process.cwd(), 'src'),
            exclude: [
                /\.(e2e|spec)\.ts$/,
                /node_modules/
            ]
        }
    ]
};