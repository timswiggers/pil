var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('serve', function(){
  connect.server({
    port: 9000
  });
});

gulp.task('default', ['serve']);
