var gulp = require('gulp'),
    del = require('del'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass');

gulp.task('deploy', ['markup', 'vendor', 'scss']);

//region src markup copy

gulp.task('markup', ['clean:markup'], function () {
    return gulp.src('src/*.*')
        .pipe(gulp.dest('dist'));
});

gulp.task('clean:markup', function (onDone) {
    del(['dist/*.*'], onDone);
});

//endregion

//region vendor js copy

gulp.task('vendor', ['clean:vendor'], function () {
    return gulp.src('bower_components/*/dist/*.js')
        .pipe(rename({
            dirname: ""
        }))
        .pipe(gulp.dest('dist/vendor'));
});

gulp.task('clean:vendor', function (onDone) {
    del(['dist/vendor/**/*.*'], onDone);
});

//endregion

//region scss compile to dist

gulp.task('scss', ['clean:css'], function () {
    return gulp.src('src/scss/styles.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('clean:css', function (onDone) {
    del(['dist/css/**/*.*'], onDone);
});

//endregion