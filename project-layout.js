var glob = require('./lib/glob'),
    Layout = require('./lib/layout');

var paths = new Layout({
    src: {
        scss: {
            main: 'styles.scss'
        },
        js: 'js',
        img: 'img',
        fonts: 'fonts',
        html: {
            _root: '/',
            pages: '',
            components: 'html'
        }
    },
    dist: {
        html: '',
        js: 'js',
        css: 'css',
        img: 'img',
        fonts: 'fonts',
        vendor: {
            js: 'js',
            css: 'css',
            fonts: 'fonts'
        }
    },
    bower: 'bower_components'
});

var patterns = new Layout({
    src: {
        html: {
            _root: '/',
            all: glob(['/*', '/html/**/*'], 'html'),
            pages: glob.allOfType('html')
        },
        js: {
            all: glob.deepAllOfType('js')
        },
        scss: {
            all: glob.deepAllOfType('scss')
        },
        img: {
            all: glob.deepAllOfType()
        },
        fonts: {
            all: glob.deepAllOfType()
        }
    },
    bower: {
        _root: paths.bower,
        js: glob(['/*/dist/*', '/*/dist/js/*'], 'js'),
        css: glob(['/*/*', '/*/css/*', '/*/dist/*', '/*/dist/css/*'], 'css'),
        fonts: glob(['/*/fonts/*', '/*/dist/fonts/*'])
    },
    dist: {
        html: {
            _root: '/',
            all: glob.allOfType()
        },
        js: {all: glob.deepAllOfType()},
        css: {all: glob.deepAllOfType()},
        img: {all: glob.deepAllOfType()},
        fonts: {all: glob.deepAllOfType()},
        vendor: {
            js: {
                all: glob.deepAllOfType('js')
            },
            css: {
                all: glob.deepAllOfType('css')
            },
            fonts: {
                all: glob.deepAllOfType()
            },
            all: glob.deepAllOfType()
        }
    }
});

module.exports = {
    paths: paths,
    patterns: patterns
};