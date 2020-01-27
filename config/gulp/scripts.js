var gulp          = require("gulp"),
    uglify        = require('gulp-uglify'),
    concat        = require("gulp-concat"),
    jshint        = require("gulp-jshint")

// task
gulp.task('compile', function (done) {
  return gulp.src('./themes/digital.gov/src/js/**/*.js') // path to your files
  .pipe(jshint())
  .pipe(jshint.reporter()) // Dump results
  // .pipe(uglify())
  .pipe(concat('base.js'))
  .pipe(gulp.dest('./themes/digital.gov/static/dist'));
});

gulp.task('simplemde-js', function (done) {
  return gulp.src('node_modules/simplemde/dist/simplemde.min.js')
  .pipe(gulp.dest('./themes/digital.gov/static/dist/'));
});

const JQUERY_PATH = 'node_modules/jquery/dist/jquery.min.js';

gulp.task('copy-jquery', () => {
  return gulp.src(`${JQUERY_PATH}`)
  .pipe(gulp.dest('./themes/digital.gov/static/dist'));
});
