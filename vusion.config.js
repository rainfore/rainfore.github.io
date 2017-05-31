const path = require('path');

module.exports = {
    assetsPath: './src/assets',
    webpack: {
        entry: {
            bundle: './src/index.js',
        },
        output: {
            path: path.resolve(__dirname, 'public'),
            publicPath: '/public/',
            filename: '[name].js',
        },
    },
    webpackDevServer: {
        port: 12356,
    },
};
