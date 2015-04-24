var gulp = require('gulp'),
    connect = require('gulp-connect'),
    watch = require('gulp-watch');

gulp.task('build', function(){
  gulp.src(['src/*.js', 'src/*.html'])
    .pipe(watch(['src/*.js', 'src/*.html']))
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
})

gulp.task('serve', function(){
  connect.server({
    port: 9000,
    livereload: true
  });
});

gulp.task('default', ['build', 'serve']);
