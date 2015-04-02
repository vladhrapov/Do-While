var gulp = require('gulp'),
    del = require('del'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect');

gulp.task('default', ['deploy', 'server', 'watch']);

gulp.task('deploy', ['vendor', 'js', 'scss', 'img', 'markup']);

//region observing

gulp.task('watch', function () {
    gulp.watch('src/*.*', ['markup']);
    gulp.watch('src/scss/**/*.scss', ['scss']);
    gulp.watch('src/js/**/*.js', ['js']);
    gulp.watch('src/img/**/*.*', ['img']);
    gulp.watch('bower_components/*/dist/*.js', ['vendor']);
});

gulp.task('server', ['deploy'], function () {
    connect.server({
        port: 8000,
        root: 'dist',
        livereload: true
    })
});

//endregion

//region markup copy

gulp.task('markup', ['clean:markup'], function () {
    return gulp.src('src/*.*')
        .pipe(gulp.dest('dist'))
        .pipe(connect.reload());
});

gulp.task('clean:markup', function (onDone) {
    del(['dist/*.*'], onDone);
});

//endregion

//region js copy

gulp.task('js', ['clean:js'], function () {
    return gulp.src('src/js/**/*.js')
        .pipe(gulp.dest('dist/js'))
        .pipe(connect.reload());
});

gulp.task('clean:js', function (onDone) {
    del(['dist/js/**/*.*'], onDone);
});

//endregion

//region img copy

gulp.task('img', ['clean:img'], function () {
    return gulp.src('src/img/**/*.*')
        .pipe(gulp.dest('dist/img'))
        .pipe(connect.reload());
});

gulp.task('clean:img', function (onDone) {
    del(['dist/img/**/*.*'], onDone);
});

//endregion

//region vendor js copy

gulp.task('vendor', ['clean:vendor'], function () {
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

gulp.task('scss', ['clean:css'], function () {
    return gulp.src('src/scss/styles.scss')
        .pipe(sass({errLogToConsole: true}))
        .pipe(gulp.dest('dist/css'))
        .pipe(connect.reload());
});

gulp.task('clean:css', function (onDone) {
    del(['dist/css/**/*.*'], onDone);
});

//endregion