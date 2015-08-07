'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var gulpIgnore = require('gulp-ignore');
var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();


gulp.task('copy',function(){
  return gulp.src([path.join(conf.paths.src, '/*.js'),
                  path.join(conf.paths.src, '/**/*.js'),
                  path.join(conf.paths.demo, '/*.js')])
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve')))
});
gulp.task('scripts',['copy'], function () {
  return gulp.src([path.join(conf.paths.tmp, '/serve/*.module.js'),
                   path.join(conf.paths.tmp, '/serve/*.config.js'),
                   path.join(conf.paths.tmp, '/serve/**/*.js')])
    .pipe(concat('zimbra.service.min.js'))
    .pipe(browserSync.reload({ stream: true }))
    .pipe(uglify())
    .pipe(gulp.dest(path.join(conf.paths.dist, '/')))
    .pipe($.size())
});
