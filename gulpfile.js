var gulp = require('gulp'),
    del = require('del');

gulp.task('markup', ['clean:markup'], function () {
    return gulp.src('src/*.*')
        .pipe(gulp.dest('dist'));
});

gulp.task('clean:markup', function (onDone) {
    del(['dist/*.*'], onDone);
});