var deploy = require('gulp-deploy-git');
var gulp = require('gulp');
gulp.task('deploy', function() {
  return gulp.src(['dist/**/*','bower.json'])
    .pipe(deploy({
      repository: 'ssh://www-data@redmine.vnc.biz/angular-zimbra-bower',
      message: 'Release 1.0.1.1',
      remoteBranch : 'master',
       branches:   ['master'],
       verbose : true,
       debug : true
    }));
});
