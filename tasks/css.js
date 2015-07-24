var gulp = require('gulp');
var sass = require('gulp-sass');
var path = require('path');

var cssGlob = 'src/css/**/*.scss';

gulp.task('build:css', function () {
  return gulp.src(cssGlob)
    .pipe(sass({
        includePaths: [path.resolve('./node_modules')]
      }).on('error', sass.logError))
    .pipe(gulp.dest('build/css'));
});

gulp.task('watch:css', ['build:css'], function () {
  gulp.watch(cssGlob, ['build:css']);
});
