var gulp = require('gulp'),
    del = require('del'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect'),
    layout = require('./project-layout'),
    paths = layout.paths,
    patterns = layout.patterns;

gulp.task('default', ['build', 'server', 'watch']);

gulp.task('build', ['copy:bower:js', 'copy:js', 'build:scss', 'copy:img', 'copy:fonts', 'copy:html']);

//region observing

gulp.task('watch', function () {
    gulp.watch(patterns.src.html, ['copy:html']);
    gulp.watch(patterns.src.scss, ['build:scss']);
    gulp.watch(patterns.src.js, ['copy:js']);
    gulp.watch(patterns.src.img, ['copy:img']);
    gulp.watch(patterns.src.fonts, ['copy:fonts']);
    gulp.watch(patterns.bower.js, ['copy:bower:js']);
});

gulp.task('server', ['build'], function () {
    connect.server({
        port: 8000,
        root: paths.dist._root,
        livereload: true
    })
});

//endregion

//region markup copy

gulp.task('copy:html', ['clean:html'], function () {
    return gulp.src(patterns.src.html)
        .pipe(gulp.dest(paths.dist.html))
        .pipe(connect.reload());
});

gulp.task('clean:html', function (onDone) {
    del(patterns.dist.html, onDone);
});

//endregion

//region js copy

gulp.task('copy:js', ['clean:js'], function () {
    return gulp.src(patterns.src.js)
        .pipe(gulp.dest(paths.dist.js))
        .pipe(connect.reload());
});

gulp.task('clean:js', function (onDone) {
    del(patterns.dist.js, onDone);
});

//endregion

//region img copy

gulp.task('copy:img', ['clean:img'], function () {
    return gulp.src(patterns.src.img)
        .pipe(gulp.dest(paths.dist.img))
        .pipe(connect.reload());
});

gulp.task('copy:fonts', ['clean:fonts'], function () {
    return gulp.src(patterns.src.fonts)
        .pipe(gulp.dest(paths.dist.fonts))
        .pipe(connect.reload());
});

gulp.task('clean:img', function (onDone) {
    del(patterns.dist.img, onDone);
});

gulp.task('clean:fonts', function (onDone) {
    del(patterns.dist.fonts, onDone);
});

//endregion

//region vendor js copy

gulp.task('copy:bower:js', ['clean:vendor'], function () {
    return gulp.src(patterns.bower.js)
        .pipe(rename({
            dirname: ''
        }))
        .pipe(gulp.dest(paths.dist.vendor))
        .pipe(connect.reload());
});

gulp.task('clean:vendor', function (onDone) {
    del(patterns.dist.vendor, onDone);
});

//endregion

//region scss compile

gulp.task('build:scss', ['clean:css'], function () {
    return gulp.src(paths.src.scss_main)
        .pipe(sass({errLogToConsole: true}))
        .pipe(gulp.dest(paths.dist.css))
        .pipe(connect.reload());
});

gulp.task('clean:css', function (onDone) {
    del(patterns.dist.css, onDone);
});

//endregion
