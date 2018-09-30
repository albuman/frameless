const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');

gulp.task('build-styles', function () {
	return gulp.src('./src/styles/main.scss')
		.pipe(rename('styles.scss'))
		.pipe(sass())
		.pipe(gulp.dest('./src/assets'));
});

gulp.task('watch-styles', function () {
	gulp.watch('./src/styles/**/*.scss', ['postcss']);
});

gulp.task('postcss', ['build-styles'], function () {
	return gulp.src('./src/assets/**/*.css')
		.pipe(postcss([require('precss'), require('autoprefixer')]))
		.pipe(gulp.dest('./src/assets'));
});

