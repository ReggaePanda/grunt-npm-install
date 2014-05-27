/*
 * grunt-npm-install
 * https://github.com/iclanzan/grunt-npm-install
 *
 * Copyright (c) 2013 Sorin Iclanzan
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  var npm = require('npm');

  grunt.registerMultiTask('npm-install', 'Install npm modules.', function() {
    var modules = Array.prototype.slice.call(arguments);
    var done = this.async();

    function errorHandler(err) {
      if (err) {
        grunt.log.error(err);
      }
      done();
    }
    if(this.data.src) {
      var installPath = this.data.src;
    } else {
      var installPath = "./";
    }
    npm.load(function (err, npm) {
        if (err) {
          grunt.log.error(err);
          return;
        }

        npm.commands.install(installPath, modules, errorHandler);
    });
  });
};
