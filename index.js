var babel = require('babel-core');

module.exports = function (content, file, opts) {
    file.isES6 = (file.isES6 == undefined) ? true : file.isES6;
    if (!file.isES6) return content;
    opts.moduleId = file.getId();
    var result = babel.transform(content, opts);
    return result.code;
};