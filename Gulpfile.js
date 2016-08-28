'use strict'

var gulp = require('gulp')
var babel = require('gulp-babel')
// var browserify = require('browserify')
// var buffer = require('vinyl-buffer')
// var source = require('vinyl-source-stream')

// gulp.task('pictures', function () {
//   return browserify({
//     entries: ['src/pictures.js'],
//     transform: [babelify.configure({
//       "presets": ["es2015"],
//       "plugins": ["transform-runtime", "transform-async-to-generator"]
//     })]
//   }).bundle()
//     .pipe(source('pictures.js'))
//     .pipe(buffer())
//     .pipe(gulp.dest('.'))
// })

gulp.task('default', function () {
  return gulp.src('src/*.js')
    .pipe(babel())
    .pipe(gulp.dest('.'))
})
