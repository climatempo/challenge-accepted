const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const less = require('gulp-less');
const cleanCSS = require('gulp-clean-css');
const concatCss = require('gulp-concat-css');
const del = require('del');

const paths = {
    styles: {
        src: 'client/public/stylesheets/**/*.css',
        dest: 'client/public/assets/styles/'
    },
    scripts: {
        src: 'client/public/javascripts/**/*.js',
        dest: 'client/public/assets/scripts/'
    }
};

function clean() {
    return del(['assets']);
}

function styles() {
    return gulp.src(paths.styles.src)
        .pipe(concatCss('main.min.css'))
        .pipe(less())
        .pipe(cleanCSS())
        .pipe(gulp.dest(paths.styles.dest));
}

function scripts() {
    return gulp.src(paths.scripts.src, {
            sourcemaps: true
        })
        .pipe(babel())
        .pipe(uglify())
        .pipe(concat('main.min.js'))
        .pipe(gulp.dest(paths.scripts.dest));
}

function watch() {
    gulp.watch(paths.scripts.src, scripts);
    gulp.watch(paths.styles.src, styles);
}

const build = gulp.series(clean, gulp.parallel(styles, scripts)/*, watch*/);

gulp.task('build', build);

gulp.task('default', build);