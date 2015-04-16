var gulp = require('gulp'),
    liveReload = require('gulp-livereload'),
    config = require('../config');

gulp.task('watch', ['build'], function () {
    liveReload.listen();
    gulp.watch(config.patterns.src.html, ['build:html']);
    gulp.watch(config.patterns.src.scss, ['build:scss_light']);
    gulp.watch(config.patterns.src.js, ['copy:js']);
});