var babel = require('babel-core');
var es2015 = require('babel-preset-es2015');

module.exports = function (content, file, opts) {
    file.isES6 = (file.isES6 === undefined) ? false : file.isES6;
    if (!file.isES6) return content;
    opts.moduleId = file.getId();
    opts.presets = opts.presets || es2015;
    var result = babel.transform(content, opts);
    return result.code;
};