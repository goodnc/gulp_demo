const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sassGlob = require('gulp-sass-glob');

function compileSass() {
  return gulp.src(['sass/**/*.scss']) // Path to your SCSS files
    .pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css')); // Output directory for CSS files
}
function watchSass() {
  gulp.watch('sass/**/*.scss', compileSass);
}

exports.default = compileSass
gulp.task('compile', compileSass);
gulp.task('watch', watchSass);