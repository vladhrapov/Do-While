var gulp = require('gulp'),
    del = require('del'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    liveReload = require('gulp-livereload'),
    path = require('path'),
    config = require('../config');

function buildScss() {
    return gulp.src(config.paths.src.scss.main)
        .pipe(sass({errLogToConsole: true}))
        .pipe(gulp.dest(config.paths.dist.css))
        .pipe(liveReload());
}

gulp.task('build:scss', ['build:img:icons', 'clean:css'], function () {
    return buildScss();
});

gulp.task('build:scss_light', ['clean:css'], function () {
    return buildScss()
});

gulp.task('clean:css', function (onDone) {
    del(config.patterns.dist.css.all, onDone);
});


