module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      dist: {
        src: [
        'js/*.js'
        ],
        dest: 'js/production.js',
      }
    },

    uglify: {
      build: {
        src: 'js/production.js',
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
          inline: false
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
    },

    copy: {
      scripts: {
        files: [{
          expand: true,
          cwd: 'js/vendor',
          src: ['**/*.js'],
          dest:'js/vendor/'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib');

  grunt.registerTask('server', [
    'build',
    'watch'
  ]);

  grunt.registerTask('build', [
    'concat',
    'uglify',
    'sass',
    'postcss',
    'copy'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);

};
