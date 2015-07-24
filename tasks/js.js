var gulp = require('gulp');
var babel = require('gulp-babel');
var eslint = require('gulp-eslint');
var karma = require('gulp-karma');

var jsGlob = 'src/js/**/*.js';
var specGlob = 'spec/**/*.js';

gulp.task('build:js', function () {
  return gulp.src('src/js/index.js')
    .pipe(babel())
    .pipe(gulp.dest('build/js'));
});

gulp.task('lint:js', function () {
  return gulp.src(jsGlob)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task('test:js', function() {
  return gulp.src(specGlob)
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'start'
    }))
    .on('error', function(err) {
      throw err;
    });
});

gulp.task('watch:js', ['build:js'], function() {
  gulp.watch(jsGlob, ['build:js']);
});
