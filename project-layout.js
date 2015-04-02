var deepAllOfType = function (root, ext) {
    if (typeof ext === 'undefined')
        ext = '*';
    return root + '/**/*.' + ext;
};

var allOfType = function (root, ext) {
    if (typeof ext === 'undefined')
        ext = '*';
    return root + '/*.' + ext;
};

var paths = {
    src: {
        _root: 'src',
        scss: 'src/scss',
        scss_main: 'src/scss/styles.scss',
        js: 'src/js',
        img: 'src/img'
    },
    dist: {
        _root: 'dist',
        html: 'dist',
        js: 'dist/js',
        css: 'dist/css',
        img: 'dist/img',
        vendor: 'dist/vendor'
    },
    bower: {
        _root: "bower_components"
    }
};

var patterns = {
    src: {
        html: allOfType(paths.src._root, 'html'),
        js: deepAllOfType(paths.src.js, 'js'),
        scss: deepAllOfType(paths.src.scss, 'scss'),
        img: deepAllOfType(paths.src.img)
    },
    bower: {
        js: paths.bower._root + '/*/dist/*.js'
    },
    dist: {
        html: allOfType(paths.dist.html),
        js: deepAllOfType(paths.dist.js),
        css: deepAllOfType(paths.dist.css),
        img: deepAllOfType(paths.dist.img),
        vendor: deepAllOfType(paths.dist.vendor)
    }
};

module.exports = {
    paths: paths,
    patterns: patterns
};