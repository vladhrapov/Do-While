var gulp = require('gulp'),
    liveReload = require('gulp-livereload'),
    rename = require('gulp-rename'),
    del = require('del'),
    config = require('../config');

gulp.task('copy:bower', ['copy:bower:js', 'copy:bower:css']);

//region vendor js copy

gulp.task('copy:bower:js', ['clean:vendor:js'], function () {
    return gulp.src(config.patterns.bower.js)
        .pipe(rename({
            dirname: ''
        }))
        .pipe(gulp.dest(config.paths.dist.vendor.js))
        .pipe(liveReload());
});

gulp.task('clean:vendor:js', function (onDone) {
    del(config.patterns.dist.vendor.js.all, onDone);
});

//endregion

// region vendor css copy

gulp.task('copy:bower:css', ['clean:vendor:css'], function () {
    return gulp.src(config.patterns.bower.css)
        .pipe(rename({
            dirname: ''
        }))
        .pipe(gulp.dest(config.paths.dist.vendor.css))
        .pipe(liveReload());
});

gulp.task('clean:vendor:css', function (onDone) {
    del(config.patterns.dist.vendor.css.all, onDone);
});

//endregion
