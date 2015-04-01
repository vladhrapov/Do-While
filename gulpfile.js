var gulp = require('gulp'),
		sass = require('gulp-sass'),
		livereload = require('gulp-livereload');

// Default Task
gulp.task('default', ['copy-source', 'copy-bower-comp', 'sass', 'watch']);

gulp.task('copy-source', function() {
   gulp.src(['src/**/*.*', '!src/scss/**/*.*'])
   .pipe(gulp.dest('dist'));
});

gulp.task('copy-bower-comp', function() {
   gulp.src('bower_components/**/dist/*.js')
   .pipe(gulp.dest('dist/vendor'));
});

gulp.task('sass', function () {
    gulp.src('src/scss/styles.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('watch', function(){
		livereload.listen();
    gulp.watch(['src/**/*.*', '!src/scss/**/*.*'], ['copy-source']).on('change', livereload.changed);
    gulp.watch('bower_components/**/dist/*.js', ['copy-bower-comp']).on('change', livereload.changed);
    gulp.watch('src/scss/styles.scss', ['sass']).on('change', livereload.changed);
});