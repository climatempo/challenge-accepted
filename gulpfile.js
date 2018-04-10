/* npm i --save gulp gulp-sass gulp-concat gulp-clean-css gulp-rename gulp-uglify browser-sync */

var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    concat      = require('gulp-concat'),
    cleanCSS    = require('gulp-clean-css'),
    rename      = require("gulp-rename"),
    uglify      = require('gulp-uglify'),
    util        = require('gulp-util');


// Compile SCSS
gulp.task('scss', function() {
  return gulp.src([
    './scss/**/*.scss',
    './node_modules/materialize-css/**/*.scss'
    ])
    .pipe(sass.sync({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./public/css'));
});

// Minify CSS
gulp.task('scss:min', ['scss'], function() {
  return gulp.src('/public/css/style.css')
    .pipe(cleanCSS())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./css'));
});

// CSS
gulp.task('css', ['scss', 'scss:min']);

// Minify JavaScript
gulp.task('js:min', function() {
  return gulp.src([
      './node_modules/materialize-css/dist/js/*.js'
    ])
    .pipe(concat('script.js'))
    .pipe(uglify())
    .on('error', function (err) { util.log(util.colors.red('[Error]'), err.toString()); })
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./public/js'));
});

// JS
gulp.task('js', ['js:min']);

// Default task
gulp.task('default', ['css', 'js']);

// Dev task
gulp.task('dev', ['css', 'js'], function() {
  gulp.watch('./scss/*.scss', ['css']);
  gulp.watch('./**/*.js', ['js']);
});