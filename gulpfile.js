var gulp = require('gulp'),
    del = require('del'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    include = require('gulp-file-include'),
    connect = require('gulp-connect'),
    layout = require('./project-layout'),
    paths = layout.paths,
    patterns = layout.patterns;

gulp.task('default', ['build', 'server', 'watch']);

gulp.task('build', ['copy:bower', 'copy:js', 'build:scss', 'copy:img', 'copy:fonts', 'build:html']);

//region observing

gulp.task('server', ['build'], function () {
    connect.server({
        port: 8000,
        root: paths.dist._root,
        livereload: true
    })
});

gulp.task('watch', function () {
    gulp.watch(patterns.src.html.all, ['build:html']);
    gulp.watch(patterns.src.scss.all, ['build:scss']);
    gulp.watch(patterns.src.js.all, ['copy:js']);
    gulp.watch(patterns.src.img.all, ['copy:img']);
    gulp.watch(patterns.bower.js, ['copy:bower:js']);
});

//endregion

//region markup copy

gulp.task('build:html', ['clean:html'], function () {
    return gulp.src(patterns.src.html.pages)
        .pipe(include())
        .pipe(gulp.dest(paths.dist.html))
        .pipe(connect.reload());
});

gulp.task('clean:html', function (onDone) {
    del(patterns.dist.html.all, onDone);
});

//endregion

//region js copy

gulp.task('copy:js', ['clean:js'], function () {
    return gulp.src(patterns.src.js.all)
        .pipe(gulp.dest(paths.dist.js))
        .pipe(connect.reload());
});

gulp.task('clean:js', function (onDone) {
    del(patterns.dist.js.all, onDone);
});

//endregion

//region img copy

gulp.task('copy:img', ['clean:img'], function () {
    return gulp.src(patterns.src.img.all)
        .pipe(gulp.dest(paths.dist.img))
        .pipe(connect.reload());
});

gulp.task('clean:img', function (onDone) {
    del(patterns.dist.img.all, onDone);
});

//endregion

//region fonts copy

gulp.task('copy:fonts', ['clean:fonts'], function () {
    return gulp.src(patterns.src.fonts.all)
        .pipe(gulp.dest(paths.dist.fonts))
        .pipe(connect.reload());
});

gulp.task('clean:fonts', function (onDone) {
    del(patterns.dist.fonts.all, onDone);
});

//endregion

//region vendor copy

gulp.task('copy:bower', ['copy:bower:js', 'copy:bower:css']);

//region vendor js copy

gulp.task('copy:bower:js', ['clean:vendor:js'], function () {
    return gulp.src(patterns.bower.js)
        .pipe(rename({
            dirname: ''
        }))
        .pipe(gulp.dest(paths.dist.vendor))
        .pipe(connect.reload());
});

gulp.task('clean:vendor:js', function (onDone) {
    del(patterns.dist.vendor.js, onDone);
});

//endregion

// region vendor js copy

gulp.task('copy:bower:css', ['clean:vendor:css'], function () {
    return gulp.src(patterns.bower.css)
        .pipe(rename({
            dirname: ''
        }))
        .pipe(gulp.dest(paths.dist.vendor))
        .pipe(connect.reload());
});

gulp.task('clean:vendor:css', function (onDone) {
    del(patterns.dist.vendor.css, onDone);
});

//endregion

//region scss compile

gulp.task('build:scss', ['clean:css'], function () {
    return gulp.src(paths.src.scss.main)
        .pipe(sass({errLogToConsole: true}))
        .pipe(gulp.dest(paths.dist.css))
        .pipe(connect.reload());
});

gulp.task('clean:css', function (onDone) {
    del(patterns.dist.css.all, onDone);
});

//endregion