var gulp = require('gulp'),
    liveReload = require('gulp-livereload'),
    fileInclude = require('gulp-file-include'),
    del = require('del'),
    config = require('../config');


gulp.task('build:html', ['clean:html'], function () {
    return gulp.src(config.patterns.src.html.pages)
        .pipe(fileInclude())
        .pipe(gulp.dest(config.paths.dist.html))
        .pipe(liveReload());
});

gulp.task('clean:html', function (onDone) {
    del(config.patterns.dist.html.all, onDone);
});