const path = require('path');
const hljs = require('highlight.js');
const preprocess = require('./src/preprocess');

module.exports = {
    version: '>=0.7.9',
    type: 'app',
    staticPath: './src/static',
    extractCSS: true,
    uglifyJS: true,
    webpack: {
        entry: {
            bundle: './index.js',
        },
        output: {
            path: path.resolve(__dirname, 'public'),
            publicPath: '/public/',
        },
        resolve: {
            alias: {
                src: path.resolve(__dirname, 'src'),
                // views: path.resolve(__dirname, 'views'),
            },
        },
        // resolveLoader: {
        //     modules: ['src/loaders', 'EXTENDS'],
        // },
        module: {
            rules: [{
                test: /\.md$/,
                use: [{
                    loader: 'vue-loader',
                    options: {
                        preserveWhitespace: false,
                    },
                }, {
                    loader: '@vusion/md-vue-loader',
                    options: {
                        wrapper: 'u-article',
                        plugins: [
                            // [iterator, 'link_converter', 'link_open', (tokens, idx) => tokens[idx].tag = 'u-link'],
                            // [iterator, 'link_converter', 'link_close', (tokens, idx) => tokens[idx].tag = 'u-link'],
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
                            // require('markdown-it-katex'),
                            // require('markdown-it-meta'),
                            // markdown-it-terminal
                            // markdown-it-kbd
                            require('./src/plugins/markdown-it-absolutize-url'),
                        ],
                        preprocess(source) {
                            const outputs = [];

                            // 获取元数据
                            let { result, meta } = preprocess.meta(source);

                            // 根据文件名处理标题和日期
                            let url = path.relative(process.cwd(), this.loader.resourcePath.replace(/\.md$/, ''));
                            let title = path.basename(url);
                            if (title === 'index') {
                                title = path.basename(path.dirname(url));
                                url = path.dirname(url);
                            }
                            url = '/' + url + '/';
                            this.markdown._url = url;

                            if (meta.redirect) {
                                if (meta.redirect.startsWith('http') || meta.redirect[0] === '/' || meta.redirect[0] === '#')
                                    url = meta.redirect;
                                else
                                    url = path.join(url, meta.redirect);
                            }

                            title = title.replace(/^\d+~/, '');

                            // 添加标题
                            if (this.loader.resourceQuery.includes('partial')) {
                                if (meta.redirect)
                                    outputs.push(`<h1><a href="${url}">${title}</a></h1>`);
                                else
                                    outputs.push(`<h1><router-link to="${url}">${title}</router-link></h1>`);
                            } else
                                outputs.push(`# ${title}`);

                            // 添加日期
                            if (meta['created-date']) {
                                const date = meta['created-date'] instanceof Date ? meta['created-date'].toJSON().split('T')[0] : meta['created-date'];
                                outputs.push(`<div class="u-article_meta">${date}</div>`);
                            }

                            // 处理摘要
                            if (this.loader.resourceQuery.includes('partial')) {
                                const arr = result.split('\n\n');
                                let i;
                                let length = 0;
                                for (i = 0; i < arr.length; i++) {
                                    length += arr[i].trim().length;
                                    if (length > 200)
                                        break;
                                }
                                result = arr.slice(0, i + 1).join('\n\n');
                            }

                            outputs.push(result);

                            {
                                let footer = '<p class="u-article_footer">';
                                if (meta.tags)
                                    footer += meta.tags.map((tag) => `<span class="u-article_tag">${tag}</span>`).join(' ');
                                if (this.loader.resourceQuery.includes('partial')) {
                                    if (meta.redirect)
                                        footer += `<a class="u-article_read-more" href="${url}">Read More →</a>`;
                                    else
                                        footer += `<router-link class="u-article_read-more" to="${url}">Read More →</router-link>`;
                                }
                                footer += '</p>';
                                outputs.push(footer);
                            }

                            return outputs.join('\n\n');
                        },
                    },
                }],
            }],
        },
    },
    webpackDevServer: {
        // host: '10.242.67.24',
        port: 12356,
        contentBase: __dirname,
    },
};
