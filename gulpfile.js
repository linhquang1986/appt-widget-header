/**
 *  Welcome to your gulpfile!
 *  The gulp tasks are splitted in several files in the gulp_tasks directory
 *  because putting all here was really too long
 */

'use strict';

var gulp = require('gulp');
var wrench = require('wrench');

/**
 *  This will load all js or coffee files in the gulp_tasks directory
 *  in order to load all gulp tasks
 */
wrench.readdirSyncRecursive('./gulp_tasks').filter(function(file) {
  return (/\.(js|coffee)$/i).test(file);
}).map(function(file) {
  require('./gulp_tasks/' + file);
});


/**
 *  Default task clean temporaries directories and launch the
 *  main optimization build task
 */
gulp.task('default', ['clean'], function () {
  gulp.start('build');
});
