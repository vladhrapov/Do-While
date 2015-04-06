var util = require('util'),
    path = require('path');

var BaseBuilder = function (pattern, ext) {
    this._pattern = pattern;

    if (typeof ext === 'undefined')
        ext = '*';

    this._extension = ext;
};

BaseBuilder.prototype.build = function (root) {
    if (util.isArray(this._pattern))
        return this._pattern.map(function (pattern) {
            return this._buildPattern(pattern, root)
        }, this);
    return this._buildPattern(this._pattern, root)
};

BaseBuilder.prototype._buildPattern = function (pattern, root) {
    if (typeof root === 'undefined')
        root = '';
    return path.join('' + root, pattern + '.' + this._extension);
};

var AllOfTypeBuilder = function (ext) {
    AllOfTypeBuilder.super_.call(this, '/*', ext);
};

util.inherits(AllOfTypeBuilder, BaseBuilder);

var DeepAllOfTypeBuilder = function (ext) {
    DeepAllOfTypeBuilder.super_.call(this, '/**/*', ext);
};

util.inherits(DeepAllOfTypeBuilder, BaseBuilder);

var BuilderFactory = function (pattern, ext) {
    return new BaseBuilder(pattern, ext);
};

BuilderFactory.Base = BaseBuilder;

BuilderFactory.allOfType = function (ext) {
    return new AllOfTypeBuilder(ext);
};

BuilderFactory.deepAllOfType = function (ext) {
    return new DeepAllOfTypeBuilder(ext);
};

module.exports = BuilderFactory;

