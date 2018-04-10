/* npm i --save gulp gulp-sass gulp-concat gulp-clean-css gulp-rename gulp-uglify browser-sync */

var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    concat      = require('gulp-concat'),
    cleanCSS    = require('gulp-clean-css'),
    rename      = require("gulp-rename"),
    uglify      = require('gulp-uglify'),
    util        = require('gulp-util'),
    jsdoc       = require('gulp-jsdoc3'),
    browserSync = require('browser-sync').create();


// Compile SCSS
gulp.task('scss', function() {
  return gulp.src([
    './src/scss/**/*.scss',
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
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
});

// CSS
gulp.task('css', ['scss', 'scss:min']);

// Minify JavaScript
gulp.task('js:min', function() {
  return gulp.src([
      './src/js/*.js',
      '!./src/js/*.min.js',
      './node_modules/materialize-css/dist/js/*.js'
    ])
    .pipe(concat('script.js'))
    .pipe(uglify())
    .on('error', function (err) { util.log(util.colors.red('[Error]'), err.toString()); })
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./public/js'))
    .pipe(browserSync.stream());
});

// JS
gulp.task('js', ['js:min']);

// Default task
gulp.task('default', ['css', 'js']);

// Documentation
gulp.task('doc', function (cb) {
  var config = require('./jsdoc.json');
  gulp.src([
  './controllers/*.js',
  './models/*.js',
  './routes/*.js'
  ], {read: false})
    .pipe(jsdoc(config, cb));
});

// Configure the browserSync task
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});


// Dev task
gulp.task('dev', ['css', 'js'], function() {
  gulp.watch('./src/scss/*.scss', ['css']);
  gulp.watch('./src/js/*.js', ['js']);
  // gulp.watch('./*.jade', browserSync.reload);
});