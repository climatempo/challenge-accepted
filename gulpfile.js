// Imports
const gulp   = require('gulp');
const sass   = require('gulp-sass');
const rename = require('gulp-rename');

/*
 * @variables
 */

// Sass source
const scssFiles = './public/assets/scss/style.scss';

// CSS
const cssDest = './public/assets/css';

// Options development
const sassDevOptions = {
    outputStyle: 'expanded'
}

// Options Production
const sassProdOptions = {
    outputStyle: 'compressed'
}

// Create Tasks

// Task 'sassdev' - Development
gulp.task('sassdev', function() {
    return gulp.src(scssFiles)
               .pipe(sass(sassDevOptions)).on('error', sass.logError)
               .pipe(gulp.dest(cssDest));
});

// Task 'sassprod' - Production
gulp.task('sassprod', function() {
    return gulp.src(scssFiles)
               .pipe(sass(sassProdOptions)).on('error', sass.logError)
               .pipe(rename('style.min.css'))
               .pipe(gulp.dest(cssDest));
});

// Task 'watch'
gulp.task('watch', function() {
    gulp.watch(scssFiles, ['sassdev', 'sassprod']);
});

// Task 'default'
gulp.task('default', ['sassdev', 'sassprod', 'watch']);
