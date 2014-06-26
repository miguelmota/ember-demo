// Karma configuration
// Generated on Thu Jun 26 2014 08:07:48 GMT-0700 (PDT)

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['qunit'],


        // list of files / patterns to load in the browser
        files: [
            'app/bower_components/lodash/dist/lodash.js',
            'app/bower_components/rutil/rutil.js',
            'app/bower_components/jquery/jquery.js',
            'app/bower_components/handlebars/handlebars.runtime.js',
            'app/bower_components/moment/moment.js',
            'app/bower_components/d3/d3.js',
            'app/bower_components/c3/c3.js',
            'app/bower_components/ember/ember.js',
            'app/bower_components/ember-data/ember-data.js',
            'app/bower_components/ember-qunit/dist/globals/main.js',
            'test/bootstrap.js',
            'app/scripts/*.js',
            'app/scripts/**/*.js',
            'test/spec/**/*.js',
            'test/spec/*.js'
        ],


        // list of files to exclude
        exclude: [
            'app/scripts/app.js',
            'test/spec/test.js',
            'test/spec/stocks.js',
            'test/spec/components/*.js'
        ],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {

        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        plugins: [
            'karma-jasmine',
            'karma-qunit',
            'karma-chrome-launcher',
            'karma-ember-preprocessor'
        ]
  });
};
