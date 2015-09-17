'use strict';
var helpers = require('yeoman-generator').test;
var assert = require('yeoman-generator').assert;
var path = require('path');

describe('gulpfile:uglify', function () {
  before(function (done) {
    helpers.run(path.join( __dirname, '../uglify'))
      .withPrompts({ src: 'app/**/*.js, assets/**/*.js', concat: 'yes', concatFile: 'main.js' }) // Mock the prompt answers
      .on('end', done);
  });

  it('generate a uglify.js file', function () {
    assert.file(['./gulp-scripts/uglify.js']);
  });
});