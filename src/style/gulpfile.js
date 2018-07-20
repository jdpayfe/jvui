const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const cssmin = require('gulp-clean-css');
const fs = require('fs-extra');

// compile component css
gulp.task('compile', () => {
    return gulp.src('./scss/*.scss').pipe(sass()).pipe(postcss()).pipe(cssmin()).pipe(gulp.dest('./lib'));
});

// copy lib files
gulp.task('lib', ['compile'], () => {
    fs.copy('./lib', '../../lib/style');
});

gulp.task('build', ['lib']);
