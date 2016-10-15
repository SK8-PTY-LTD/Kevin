/**
 *  Welcome to your gulpfile!
 *  The gulp tasks are split into several files in the gulp directory
 *  because putting it all here was too long
 */

'use strict';

var fs = require('fs');
var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var appGitURL = "https://github.com/kevinsuzc/kevin.git";
/**
 *  This will load all js or coffee files in the gulp directory
 *  in order to load all gulp tasks
 */
fs.readdirSync('./gulp').filter(function(file) {
  return (/\.(js|coffee)$/i).test(file);
}).map(function(file) {
  require('./gulp/' + file);
});


/**
 *  Default task clean temporaries directories and launch the
 *  main optimization build task
 */
gulp.task('default', ['clean'], function () {
  gulp.start('build');
});

/**
 * Deploy for github pages
 */

gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages(
      {
        remoteUrl: appGitURL
      }
    ));
});
