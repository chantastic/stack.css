var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

var paths = {
  styles: 'src/*.sass'
};

gulp.task('sass', function () {
  gulp.src(paths.styles)
    .pipe(sass())
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function () {
  gulp.watch(paths.styles, ['sass']);
});

gulp.task('default', ['sass']);
