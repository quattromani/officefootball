'use strict';

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  // Project configuration.
  var gruntConfig = {

    config: {
      src: 'src'
    },

    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['js/scripts/*.js'],
        dest: 'js/production.min.js'
      }
    },

    uglify: {
      build: {
        src: 'js/production.min.js',
        dest: 'js/production.min.js'
      }
    },

    sass: {
      dist: {
        files: {
          'css/main.css' : 'css/scss/main.scss'
        }
      }
    },

    watch: {
      assemble: {
        files: ['{content,data,templates,css/scss,js}/{,*/}*.{md,hbs,yml,scss,js}'],
        tasks: ['build']
      }
    },

    postcss: {
      options: {
        map: {
          inline: false, // save all sourcemaps as separate files...
          annotation: 'css' // ...to the specified directory
        },

        processors: [
          require('pixrem')(),
          require('autoprefixer')({browsers: 'last 2 versions'}),
          require('cssnano')()
        ]
      },
      dist: {
        files: {
          'css/main.css': ['css/main.css']
        }
      }
    }
  }

  grunt.registerTask('server', [
    'build',
    'watch'
    ]);

  grunt.registerTask('build', [
    'concat',
    'uglify',
    'sass',
    'postcss'
    ]);

  grunt.registerTask('default', [
    'build'
    ]);

  grunt.initConfig(gruntConfig);

};
