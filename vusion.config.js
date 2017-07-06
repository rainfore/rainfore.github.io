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
        resolveLoader: {
            EXTENDS: true,
            modules: ['src/loaders', 'EXTENDS'],
        },
        module: {
            EXTENDS: true,
            rules: [
                { test: /\.md$/, loader: 'vue-markdown-loader', options: {
                    langPrefix: 'lang-',
                    html: true,
                    preprocess(markdownIt, source) {
                        const outputs = [];

                        // 获取元数据
                        let { result, meta } = preprocess.meta(source);

                        // 根据文件名处理标题和日期
                        let url = path.relative(process.cwd(), this.resourcePath.replace(/\.md$/, ''));
                        let title = path.basename(url);
                        if (title === 'index') {
                            title = path.basename(path.dirname(url));
                            url = path.dirname(url);
                        }
                        url = '/' + url.split('/').map((part) => encodeURIComponent(part)).join('/') + '/';
                        markdownIt._url = url;

                        if (/^\d{8}~/.test(title)) {
                            const arr = title.split('~');
                            title = arr[1];
                            meta['created-date'] = new Date(arr[0].slice(0, 4) + '-' + arr[0].slice(4, 6) + '-' + arr[0].slice(6, 8));
                        }

                        // 添加标题
                        if (this.resourceQuery.includes('partial'))
                            outputs.push(`<h1><router-link to="${url}">${title}</router-link></h1>`);
                        else
                            outputs.push(`# ${title}`);

                        // 添加日期
                        if (meta['created-date']) {
                            const date = meta['created-date'] instanceof Date ? meta['created-date'].toJSON().split('T')[0] : meta['created-date'];
                            outputs.push(`<div class="u-article-meta">${date}</div>`);
                        }

                        // 处理摘要
                        if (this.resourceQuery.includes('partial')) {
                            const m = result.match(/^[\s\S]*?(?=#{2,5})/);
                            result = m ? m[0] : result.slice(0, 200);
                        }

                        outputs.push(result);

                        if (this.resourceQuery.includes('partial'))
                            outputs.push(`<p class="read-more"><router-link to="${url}">Read More →</router-link></p>`);

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
                        [require('markdown-it-implicit-figures'), {
                            figcaption: true,
                        }],
                        require('markdown-it-katex'),
                        // require('markdown-it-meta'),
                        // markdown-it-terminal
                        // markdown-it-kbd
                        require('./src/plugins/markdown-it-absolutize-url'),
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
