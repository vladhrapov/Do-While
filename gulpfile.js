var gulp = require('gulp'),
    del = require('del'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect');

gulp.task('default', ['build', 'server', 'watch']);

gulp.task('build', ['copy:vendor:js', 'copy:js', 'build:scss', 'copy:img', 'copy:html']);

//region observing

gulp.task('watch', function () {
    gulp.watch('src/*.*', ['copy:html']);
    gulp.watch('src/scss/**/*.scss', ['build:scss']);
    gulp.watch('src/js/**/*.js', ['copy:js']);
    gulp.watch('src/img/**/*.*', ['copy:img']);
    gulp.watch('bower_components/*/dist/*.js', ['copy:vendor:js']);
});

gulp.task('server', ['build'], function () {
    connect.server({
        port: 8000,
        root: 'dist',
        livereload: true
    })
});

//endregion

//region markup copy

gulp.task('copy:html', ['clean:markup'], function () {
    return gulp.src('src/*.*')
        .pipe(gulp.dest('dist'))
        .pipe(connect.reload());
});

gulp.task('clean:markup', function (onDone) {
    del(['dist/*.*'], onDone);
});

//endregion

//region js copy

gulp.task('copy:js', ['clean:js'], function () {
    return gulp.src('src/js/**/*.js')
        .pipe(gulp.dest('dist/js'))
        .pipe(connect.reload());
});

gulp.task('clean:js', function (onDone) {
    del(['dist/js/**/*.*'], onDone);
});

//endregion

//region img copy

gulp.task('copy:img', ['clean:img'], function () {
    return gulp.src('src/img/**/*.*')
        .pipe(gulp.dest('dist/img'))
        .pipe(connect.reload());
});

gulp.task('clean:img', function (onDone) {
    del(['dist/img/**/*.*'], onDone);
});

//endregion

//region vendor js copy

gulp.task('copy:vendor:js', ['clean:vendor'], function () {
    return gulp.src('bower_components/*/dist/*.js')
        .pipe(rename({
            dirname: ""
        }))
        .pipe(gulp.dest('dist/vendor'))
        .pipe(connect.reload());
});

gulp.task('clean:vendor', function (onDone) {
    del(['dist/vendor/**/*.*'], onDone);
});

//endregion

//region scss compile

gulp.task('build:scss', ['clean:css'], function () {
    return gulp.src('src/scss/styles.scss')
        .pipe(sass({errLogToConsole: true}))
        .pipe(gulp.dest('dist/css'))
        .pipe(connect.reload());
});

gulp.task('clean:css', function (onDone) {
    del(['dist/css/**/*.*'], onDone);
});

//endregion