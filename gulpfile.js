'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const minifyCss = require('gulp-minify-css');
const rename = require('gulp-rename');

gulp.task('sass', function (done) {
    gulp.src('./public/scss/app.scss')
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(gulp.dest('./public/css'))
        .pipe(minifyCss({
            keepSpecialComments: 0
        }))
        .pipe(rename({extname: '.min.css'}))
        .pipe(gulp.dest('./public/css'))
        .on('end', done);
});