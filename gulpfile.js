var gulp = require('gulp'),
    del = require('del'),
    rename = require('gulp-rename');

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