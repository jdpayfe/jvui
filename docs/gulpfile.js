const gulp = require('gulp');
const concat = require('gulp-concat');

gulp.task('scripts', () => {
    gulp.src(['./zh/api/index.md', './zh/api/components/*.md']).pipe(concat('api.md')).pipe(gulp.dest('./zh/'));
});

gulp.task('concat', ['scripts']);
