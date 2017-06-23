const path = require('path');
const hljs = require('highlight.js');

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
                { test: /\.md$/, loader: 'vue-markdown-loader', options: {
                    langPrefix: 'lang-',
                    html: true,
                    linkify: true,
                    highlight(str, lang) {
                        if (lang && hljs.getLanguage(lang)) {
                            try {
                                return hljs.highlight(lang, str).value;
                            } catch (__) {}
                        }

                        return ''; // use external default escaping
                    },
                    use: [
                        require('markdown-it-katex'),
                    ],
                } },
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
