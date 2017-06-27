const path = require('path');
const hljs = require('highlight.js');
const preprocess = require('./src/preprocess');

module.exports = {
    assetsPath: './src/assets',
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
                src: path.resolve(__dirname, 'src'),
                // views: path.resolve(__dirname, 'views'),
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

                        const { result, meta } = preprocess.meta(source);

                        const outputs = [`# ${title}`];
                        if (meta.date) {
                            if (meta.date instanceof Date)
                                meta.date = meta.date.toJSON().split('T')[0];
                            outputs.push(`<div class="u-article-meta">${meta.date}</div>`);
                        }
                        outputs.push(result);
                        return outputs.join('\n\n');
                    },
                    highlight(str, lang) {
                        if (lang && hljs.getLanguage(lang)) {
                            try {
                                return hljs.highlight(lang, str).value;
                            } catch (e) {}
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
                        // [require('markdown-it-link-attributes'), { target: '_blank' }],
                        require('markdown-it-container'),
                        [require('markdown-it-anchor'), {
                            level: 2,
                            slugify: (str) => str.replace(/[^\u4e00-\u9fa5\w-]/g, '-'),
                            permalink: true,
                        }],
                        require('markdown-it-task-lists'),
                        // attrs,
                        // embed,
                        // decorate
                        require('markdown-it-implicit-figures'),
                        require('markdown-it-katex'),
                        // require('markdown-it-meta'),
                        // markdown-it-terminal
                        // markdown-it-kbd
                    ],
                } },
                'EXTENDS',
            ],
        },
    },
    webpackDevServer: {
        // host: '10.242.67.24',
        port: 12356,
        publicPath: '/public/',
        contentBase: __dirname,
    },
};
