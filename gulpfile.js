// Define JS
'use strict';

// Call Gulp
var gulp = require('gulp');

// CSS Preprocessors
var sass = require('gulp-sass');

// Live Reload
var browserSync = require('browser-sync').create();

// useref plugin
// var useref = require('gulp-useref');

// gulp if
// var uglify = require('gulp-uglify');

// gulp if
// var gulpIf = require('gulp-if');

// Define BrowserSync Task
gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: 'app'
        },

    });
});

// USerref
gulp.task('useref', function () {
    return gulp.src('app/*.html')
       //  .pipe(useref())
        // Minifies only if it's a JavaScript file
        // .pipe(gulpIf('*.js', uglify()))
       //  .pipe(gulp.dest('dist'))
});
// Styles
gulp.task('styles', function () {
    return gulp.src('dist/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

// Watch
gulp.task('watch', gulp.parallel('browserSync', 'styles', function (done) {
    gulp.watch('dist/scss/**/*.scss');
}));
function reload(done) {
    browserSync.reload();
    done();
  }
  
  gulp.watch(['app/**/*.js'], gulp.series(reload));

