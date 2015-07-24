var path = require('path');

var specGlob = 'spec/**/*.js';

module.exports = function(config) {

  config.set({
    basePath: '',

    browsers: ['PhantomJS'],

    singleRun: true,

    frameworks: ['browserify', 'phantomjs-shim', 'mocha', 'chai'],

    files: [specGlob],

    preprocessors: {
      'src/js/**/*.js': ['browserify'],
      'spec/**/*.js': ['browserify']
    },

    browserify: {
      debug: true,
      transform: ['babelify']
    },

    reporters: ['dots']
  });
};
