var gulp = require('gulp');
var nunjucks = require('gulp-nunjucks-html');

var htmlGlob = 'src/**/*.html'

gulp.task('build:html', function () {
  return gulp.src('src/*.html')
    .pipe(nunjucks({
      searchPaths: ['src']
    }))
    .pipe(gulp.dest('build'));
});

gulp.task('watch:html', ['build:html'], function() {
  gulp.watch(htmlGlob, ['build:html']);
});
