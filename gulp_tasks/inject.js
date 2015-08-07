'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var bowerFiles = require('main-bower-files');

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep').stream;
var _ = require('lodash');

gulp.task('inject', ['scripts'], function () {
  var injectStyles = gulp.src([
    path.join(conf.paths.src, '/**/*.css')
  ], { read: false });

  var injectScripts = gulp.src([
    path.join(conf.paths.src, '/*.module.js'),
    path.join(conf.paths.src, '/*.config.js'),
    path.join(conf.paths.src, '/**/*.js'),
    path.join(conf.paths.demo, '*.js'),
    path.join('!' + conf.paths.src, '/**/*.spec.js'),
    path.join('!' + conf.paths.src, '/**/*.mock.js')
  ])
  .pipe($.angularFilesort()).on('error', conf.errorHandler('AngularFilesort'));

  var injectOptions = {
    ignorePath: [conf.paths.src,path.join(conf.paths.tmp, '/serve'),conf.paths.demo],
    addRootSlash: false
  };

  return gulp.src(path.join(conf.paths.demo, '/*.html'))
    .pipe($.inject(injectStyles, injectOptions))
    .pipe($.inject(injectScripts, injectOptions))
    .pipe(wiredep(_.extend({}, conf.wiredep)))
      // .pipe($.inject(gulp.src(bowerFiles(),{read: false}), { base: conf.paths.bower},{name: 'bower'}))
    .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve')));
});
