module.exports = config => {
    config.set({
        basePath: '',
        autoWatch: true,
        browsers: ['Chrome'],
        files: ['./karma.entry.js'],
        frameworks: ['jasmine'],
        exclude: [],
        client: {
            captureConsole: false
        },
        logLevel: config.LOG_INFO,
        phantomJsLauncher: {
            exitOnResourceError: true
        },
        port: 9876,
        preprocessors: {
            'karma.entry.js': ['coverage', 'webpack', 'sourcemap']
        },
        coverageReporter: {
            type: 'in-memory'
        },
        remapCoverageReporter: {
            'text-summary': null,
            json: './coverage/coverage.json',
            html: './coverage/html'
        },
        reporters: ['coverage', 'remap-coverage'],
        colors: true,
        singleRun: true,
        autoWatch: false,
        webpack: require('./webpack.test.config.js'),
        webpackMiddleware: {
            noInfo: true,
            stats: {
                chunks: false
            }
        }
    });
};