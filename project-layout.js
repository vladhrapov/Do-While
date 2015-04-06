var glob = require('./lib/glob'),
    Layout = require('./lib/layout');

var paths = new Layout({
    src: {
        scss: {
            main: 'styles.scss'
        },
        js: 'js',
        img: 'img',
        html: new Layout('/', {
            pages: '',
            components: 'html'
        })
    },
    dist: {
        html: '',
        js: 'js',
        css: 'css',
        img: 'img',
        vendor: 'vendor'
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
        }
    },
    bower: {
        _root: paths.bower,
        js: glob(['/*/dist/*', '/*/dist/js/*'], 'js'),
        css: glob(['/*/dist/*', '/*/dist/css/*'], 'css')
    },
    dist: {
        html: {all: glob.allOfType()},
        js: {all: [ glob.deepAllOfType(), '../']},
        css: {all: glob.deepAllOfType()},
        img: {all: glob.deepAllOfType()},
        vendor: {all: glob.deepAllOfType()}
    }
});

module.exports = {
    paths: paths,
    patterns: patterns
};