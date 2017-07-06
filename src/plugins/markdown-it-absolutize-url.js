const path = require('path');

const markdownitAbsolutizeURL = function (md, config) {
    const absolutizeURL = function (url, resourcePath) {
        const basepath = md._url;
        if (url.startsWith('http') || url[0] === '/' || url[0] === '#')
            return url;
        else
            return basepath + url;
    };

    const generateRule = (type, attr) => {
        const defaultRender = md.renderer.rules[type] || this.defaultRender;

        md.renderer.rules[type] = (tokens, idx, options, env, self) => {
            const token = tokens[idx];
            token.attrSet(attr, absolutizeURL(token.attrGet(attr)));

            return defaultRender(tokens, idx, options, env, self);
        };
    };

    generateRule('link_open', 'href');
    generateRule('image', 'src');
};

markdownitAbsolutizeURL.defaultRender = (tokens, idx, options, env, self) => self.renderToken(tokens, idx, options);

module.exports = markdownitAbsolutizeURL;
