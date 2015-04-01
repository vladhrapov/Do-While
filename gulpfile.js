var gulp = require('gulp'),
	sass = require('gulp-sass'),
	uglify = require('gulp-uglify'),
	livereload = require('gulp-livereload');
	connect = require('gulp-connect')


gulp.task('default', ['connect', 'watch']);

// connection to server for live reload
gulp.task('connect', function () {
	connect.server({
		root: 'dist',
		livereload: true
	})
})

// copy all js,scss,sass,less and bower components files
gulp.task('copy', ['copy_js', 'copy_styles', 'copy_comp', 'copy_html']);

// copy js files and minimize them
gulp.task('copy_js', function() {
   gulp.src('./src/js/*.js')
   .pipe(uglify())
   .pipe(gulp.dest('./dist/js'))
   .pipe(connect.reload());
});

// copy css and make css from scss
gulp.task('copy_styles', function() {
   gulp.src('./src/scss/*.scss')
   .pipe(sass())
   .pipe(gulp.dest('./dist/css'))
   .pipe(connect.reload());
});

// copy bower components
gulp.task('copy_comp', function() {
   gulp.src('./bower_components/**')
   .pipe(gulp.dest('./dist/vendor'))
});

// copy html files
gulp.task('copy_html', function() {
   gulp.src('./src/*.html')
   .pipe(gulp.dest('./dist'))
   .pipe(connect.reload());
});

// watch html,scss,js files in src directory
gulp.task('watch', function () {
	gulp.watch('./src/scss/*.scss', ['copy_styles']);
	gulp.watch('./src/js/*.js', ['copy_js']);
	gulp.watch('./src/*.html', ['copy_html']);
});