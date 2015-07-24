var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('serve', ['watch'], function() {
  gulp.src('build')
    .pipe(webserver({
      open: true
    }));
});
