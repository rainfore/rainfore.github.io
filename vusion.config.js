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
                    preprocess(markdownIt, source) {
                        let title = path.basename(this.resourcePath, '.md');
                        if (title === 'index')
                            title = path.basename(path.dirname(this.resourcePath));
                        source = `# ${title}\n\n` + source;
                        return source;
                    },
                    highlight(str, lang) {
                        if (lang && hljs.getLanguage(lang)) {
                            try {
                                return hljs.highlight(lang, str).value;
                            } catch (__) {}
                        }

                        return ''; // use external default escaping
                    },
                    use: [
                        require('markdown-it-sub'),
                        require('markdown-it-sup'),
                        require('markdown-it-ins'),
                        require('markdown-it-mark'),
                        require('markdown-it-abbr'),
                        require('markdown-it-footnote'),
                        require('markdown-it-deflist'),
                        // emoji
                        [require('markdown-it-link-attributes'), { target: '_blank' }],
                        require('markdown-it-container'),
                        // anchor
                        require('markdown-it-task-lists'),
                        // attrs,
                        // embed,
                        // decorate
                        require('markdown-it-implicit-figures'),
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
