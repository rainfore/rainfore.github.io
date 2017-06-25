const YAML = require('js-yaml');

exports.meta = function (source) {
    let meta = {};
    const result = source.replace(/^\s*---\n([\s\S]+?)\n---\n\s*/, (m, data) => {
        meta = YAML.safeLoad(data, { json: true }) || {};
        return '';
    });

    return { result, meta };
};
