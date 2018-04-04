/**
 * Criado por Diego Hideky em 30/08/2017
 * Email: <diegohideky@gmail.com>
 *
 * Este arquivo é responsável por automatizar as tarefas da aplicação.
 */

var gulp = require('gulp'),
  imagemin = require('gulp-imagemin'),
  clean = require('gulp-clean'),
  uglify = require('gulp-uglify'),
  cssmin = require('gulp-cssmin'),
  usemin = require('gulp-usemin'),
  browserSync = require('browser-sync'),
  jshint = require('gulp-jshint'),
  jshintStylish = require('jshint-stylish'),
  csslint = require('gulp-csslint'),
  autoprefixer = require('gulp-autoprefixer'),
  sass = require('gulp-sass');

/**
 * Função default que inicia minificação de imagens e arquivos JS, CSS
 * Esta função depende da função copy
 */
gulp.task('default', ['copy'], function () {
  gulp.start('build-img', 'usemin');
});

/**
 * Função responsável por copiar arquivos img
 * Esta função depende da função clean
 */
gulp.task('copy', ['clean'], function () {
  return gulp.src('app/src/img/*')
    .pipe(gulp.dest('app/dist/img'));
});

/**
 * Função responsável por limpar app/dist
 */
gulp.task('clean', function () {
  return gulp.src('app/dist')
    .pipe(clean());
});

/**
 * Função responsável por minimificar imagens
 */
gulp.task('build-img', function () {
  gulp.src('app/dist/img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('app/dist/img'));
});

/**
 * Função responsável por concatenar arquivos JS e CSS
 * É utilizado Uglify para minimificar o arquivo JS
 * É utilizado Cssmin para minimificar o arquivo CSS
 *
 * Também é utilizado Autoprefixer para gerar prefixos de outros browsers
 * No arquivo browserslist é definido quantas versões deve ser atendidas
 */
gulp.task('usemin', function () {
  gulp.src('app/index.html')
    .pipe(usemin({
      'js': [uglify],
      'css': [autoprefixer, cssmin]
    }))
    .pipe(gulp.dest('app/dist'));
});

/**
 * Função que inicia browserSync, abrindo a aplicação em http://localhost:3000 no browser
 */
gulp.task('climatempo', function () {
  browserSync.init({
    server: {
      baseDir: 'app/'
    }
  });

  /**
   * Listener de arquivos JavaScript
   *
   * Ao alterar um arquivo JS é feita a verificação do código com JSHint
   * Caso ocorra alguma irregularidade no código esta função printa no terminal
   */
  gulp.watch('app/src/js/**/*.js').on('change', function (event) {
    gulp.src(event.path)
      .pipe(jshint())
      .pipe(jshint.reporter(jshintStylish));
  });

  /**
   * Listener de arquivos CSS
   *
   * Ao alterar um arquivo CSS é feita a verificação do código com CSSLint
   * Caso ocorra alguma irregularidade no código esta função printa no terminal
   */
  gulp.watch('app/src/css/**/*.css').on('change', function (event) {
    gulp.src(event.path)
      .pipe(csslint())
      .pipe(csslint.formatter());
  });

  /**
   * Listener de arquivos SASS
   *
   * Ao alterar um arquivo SASS é feita a verificação do código com SASS
   * Caso ocorra alguma irregularidade no código esta função printa no terminal
   */
  gulp.watch('app/src/sass/*.scss').on('change', function (event) {
    console.log('Arquivo alterado: ' + event.path);
    console.log('Compilando app/src/sass/climatempo.scss');

    /**
     * Função para compilar arquivo SASS em CSS
     */
    gulp.src('app/src/sass/climatempo.scss')
      .pipe(sass().on('error', function (error) {
        console.log('Problema ao compilar: ');
        console.log(error.message);
      }))
      .pipe(gulp.dest('app/src/css'));
  });

  /**
   * Listener de todos os arquivos
   * Ao alterar algum arquivo, o browser é recarregado
   */
  gulp.watch('app/**/**/**/*').on('change', browserSync.reload);
});