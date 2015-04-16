var gulp = require('gulp'),
    liveReload = require('gulp-livereload'),
    browserify = require('gulp-browserify'),
    del = require('del'),
    config = require('../config');

gulp.task('build:js', ['clean:js'], function () {
    return gulp.src(config.paths.src.js.main)
        .pipe(browserify())
        .pipe(gulp.dest(config.paths.dist.js))
        .pipe(liveReload());
});

gulp.task('clean:js', function (onDone) {
    del(config.patterns.dist.js, onDone);
});
