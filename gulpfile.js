'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp.src('./library/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./library/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./library/scss/**/*.scss', ['sass']);
});
