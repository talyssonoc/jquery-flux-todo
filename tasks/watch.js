var gulp = require('gulp');

gulp.task('watch', ['build', 'watch:html', 'watch:js', 'watch:css']);
