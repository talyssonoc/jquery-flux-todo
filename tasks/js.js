var gulp = require('gulp');
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var eslint = require('gulp-eslint');
var karma = require('gulp-karma');

var jsGlob = 'src/js/**/*.js';
var specGlob = 'spec/**/*.js';

gulp.task('build:js', function () {
  browserify({
  entries: 'src/js/index.js',
  debug: true
  })
    .transform(babelify)
    .bundle()
    .pipe(source('index.js'))
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
