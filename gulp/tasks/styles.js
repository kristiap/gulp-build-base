var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var config = require('../config').styles;

gulp.task('styles', function () {
    return gulp.src(config.src)
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(gulp.dest(config.dest));
});