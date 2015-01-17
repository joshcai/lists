var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var reactify = require('reactify');
var jshint = require('gulp-jshint');


var paths = {
  app_js: ['./src/jsx/app.jsx'],
  js: ['./src/jsx/*.jsx']
}

gulp.task('lint', function() {
  return gulp.src(paths.js)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// Bundle js with browserify
gulp.task('js', function(){
  browserify(paths.app_js)
    .transform(reactify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./public/js/'));
});

// Rerun tasks whenever a file changes.
gulp.task('watch', function() {
  gulp.watch(paths.js, ['js']);
});

// The default task (called when we run `gulp` from cli)
gulp.task('default', ['watch', 'js']);
