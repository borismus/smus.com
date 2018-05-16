var gulp = require('gulp');

gulp.task('default', ['css'], function() {
  // place code for your default task here
});

gulp.task('css', function () {
    var postcss = require('gulp-postcss');
    return gulp.src('css/style.css')
        .pipe( postcss([ require('cssnext')(), require('cssnano')() ]) )
        .pipe( gulp.dest('build/') );
});
