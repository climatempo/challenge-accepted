var gulp     = require('gulp'),
	sass     = require('gulp-sass'),
	concat   = require('gulp-concat');

gulp.task('default', ['sass', 'watch']);

gulp.task('sass', function() {
  	return gulp.src('public/assets/scss/**/style.scss')
  		.pipe(concat('style.min.css'))
    	.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    	.pipe(gulp.dest('public/assets/css/'));
});

gulp.task('watch', function() {
    gulp.watch('public/assets/scss/**/*.scss', ['sass']);
}); 