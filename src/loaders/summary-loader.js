module.exports = function (content) {
    const m = content.match(/^[\s\S]*?#{2,5}[\s\S]*?(?=#{2,5})/);
    return m ? m[0] : content.slice(0, 200);
};
