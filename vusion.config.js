const path = require('path');

module.exports = {
    assetsPath: './lib/assets',
    webpack: {
        entry: {
            bundle: './index.js',
        },
        output: {
            path: path.resolve(__dirname, 'public'),
            publicPath: '/public/',
            filename: '[name].js',
        },
        resolve: {
            EXTENDS: true,
            alias: {
                EXTENDS: true,
                lib: path.resolve(__dirname, 'lib'),
                views: path.resolve(__dirname, 'views'),
            },
        },
        module: {
            EXTENDS: true,
            rules: [
                { test: /\.md$/, loader: 'vue-markdown-loader' },
                'EXTENDS',
            ],
        },
    },
    webpackDevServer: {
        port: 12356,
        publicPath: '/public/',
        contentBase: __dirname,
    },
};
