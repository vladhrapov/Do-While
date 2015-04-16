var gulp = require('gulp'),
    liveReload = require('gulp-livereload'),
    del = require('del'),
    config = require('../config');

gulp.task('build:js', ['clean:js'], function () {
    return gulp.src(config.patterns.src.js.all)
        .pipe(gulp.dest(config.paths.dist.js))
        .pipe(liveReload());
});

gulp.task('clean:js', function (onDone) {
    del(config.patterns.dist.js.all, onDone);
});
